import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react'; // 👉 tambahkan useEffect
import { SuratMasuk, SuratKeluar } from '@/types';
import AppLayout from '@/layouts/app-layout';
import SuratMasukTable from '@/components/suratmasuk';
import SuratKeluarTable from '@/components/suratkeluar';

interface ManageSuratProps {
    suratmasuk: SuratMasuk[];
    suratkeluar: SuratKeluar[];
}

export default function Manage({ suratmasuk, suratkeluar }: ManageSuratProps) {
    const [selectedSurat, setSelectedSurat] = useState<string>('Surat Masuk');
    const suratList = ['Surat Masuk', 'Surat Keluar'];

    useEffect(() => {
        const savedSurat = localStorage.getItem('selectedSurat');
        if (savedSurat) {
            setSelectedSurat(savedSurat);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedSurat', selectedSurat);
    }, [selectedSurat]);

    const getSuratTitle = (surat: string) => {
        switch (surat) {
            case 'Surat Masuk':
                return 'Tabel Surat Masuk';
            case 'Surat Keluar':
                return 'Tabel Surat Keluar';
            default:
                return 'Tabel Surat';
        }
    };

    return (
        <AppLayout>
            <Head title="Manage Surat" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-hidden rounded-xl p-4">
                <div className="flex w-full justify-between rounded-lg p-3 shadow-lg">
                    <div className="mb-2 flex items-center justify-between">
                        <h2 className="ml-4 text-3xl font-semibold text-white">{getSuratTitle(selectedSurat)}</h2>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        let path = '';
                                        if (selectedSurat === 'Surat Masuk') {
                                            path = '/suratmasuk/create';
                                        } else if (selectedSurat === 'Surat Keluar') {
                                            path = '/suratkeluar/create';
                                        }
                                        if (path) {
                                            window.location.href = path;
                                        }
                                    }}
                                    className="w-full rounded-lg bg-gray-800 px-4 py-2 text-white shadow-md transition hover:bg-gray-700"
                                >
                                    Tambah Data
                                </button>

                                <button
                                    onClick={() => {
                                        window.open(`/export-excel?table=${encodeURIComponent(selectedSurat)}`, '_blank');
                                    }}
                                    className="w-full rounded-lg bg-gray-800 px-4 py-2 text-white shadow-md transition hover:bg-gray-700"
                                >
                                    Export Excel
                                </button>
                            </div>

                            <div className="col-span-2 sm:col-span-1 md:col-span-2">
                                <select
                                    value={selectedSurat}
                                    onChange={(e) => setSelectedSurat(e.target.value)}
                                    className="w-full rounded-lg border border-transparent bg-gray-700 px-3 py-1 text-white focus:ring-2 focus:ring-gray-100 focus:outline-none focus:bg-gray-800"
                                >
                                    {suratList.map((surat) => (
                                        <option key={surat} value={surat} className="focus:bg-gray-800">
                                            {surat}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex h-full w-full">
                    <div
                        id="mainContent"
                        className="border-sidebar-border/70 dark:border-sidebar-border scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-800 scrollbar-track-gray-800 w-full rounded-xl border p-4 md:min-h-min dark:bg-neutral-900"
                    >
                        {selectedSurat === 'Surat Masuk' && <SuratMasukTable data={suratmasuk} />}
                        {selectedSurat === 'Surat Keluar' && <SuratKeluarTable data={suratkeluar} />}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
