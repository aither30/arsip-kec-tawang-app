import KibMutasiMasukTable from '@/components/KibMutasiMasukTable';
import TableKibA from '@/components/tablekiba';
import TableKibB from '@/components/tablekibb';
import TableKibC from '@/components/tablekibc';
import TableKibD from '@/components/tablekibd';
import TableKibE from '@/components/tablekibe';
import TableKibF from '@/components/tablekibf';
import TableMutasiKeluarKibA from '@/components/tablemutasikeluarkiba';
import TablePengadaanBarangInventaris from '@/components/tablepengadaanbaranginventaris';
import TableKibRekapitulasi from '@/components/tablerekapitulasi';
import AppLayout from '@/layouts/app-layout';
import {
    KibAItem,
    KibBItem,
    KibCItem,
    KibDItem,
    KibEItem,
    KibFItem,
    KibMutasiMasukKibA,
    KibRekapitulasiItem,
    MutasiKeluarKibAItem,
    PengadaanBarangInventarisItem,
} from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const kibList = [
    'KIB A',
    'KIB B',
    'KIB C',
    'KIB D',
    'KIB E',
    'KIB F',
    'Tabel Rekapitulasi',
    'Tabel Mutasi Masuk KIB A',
    'Tabel Pengadaan Barang Inventaris',
    'Tabel Mutasi Keluar KIB A',
];

interface ManageProps {
    kibA: KibAItem[];
    kibB: KibBItem[];
    kibC: KibCItem[];
    kibD: KibDItem[];
    kibE: KibEItem[];
    kibF: KibFItem[];
    kibRekapitulasi: KibRekapitulasiItem[];
    mutasiMasuk: KibMutasiMasukKibA[];
    pengadaanBarangInventaris: PengadaanBarangInventarisItem[];
    mutasiKeluar: MutasiKeluarKibAItem[];
}

export default function Manage({
    kibA,
    kibB,
    kibC,
    kibD,
    kibE,
    kibF,
    kibRekapitulasi,
    mutasiMasuk,
    pengadaanBarangInventaris,
    mutasiKeluar,
}: ManageProps) {
    const [selectedKIB, setSelectedKIB] = useState<string>('KIB A');

    useEffect(() => {
        const savedKIB = localStorage.getItem('selectedKIB');
        if (savedKIB) {
            setSelectedKIB(savedKIB);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedKIB', selectedKIB);
    }, [selectedKIB]);

    const getKIBTitle = (kib: string) => {
        switch (kib) {
            case 'KIB A':
                return 'Tabel Kartu Inventaris Barang A';
            case 'KIB B':
                return 'Tabel Kartu Inventaris Barang B';
            case 'KIB C':
                return 'Tabel Kartu Inventaris Barang C';
            case 'KIB D':
                return 'Tabel Kartu Inventaris Barang D';
            case 'KIB E':
                return 'Tabel Kartu Inventaris Barang E';
            case 'KIB F':
                return 'Tabel Kartu Inventaris Barang F';
            case 'Tabel Rekapitulasi':
                return 'Tabel Rekapitulasi ';
            case 'Tabel Mutasi Masuk KIB A':
                return 'Tabel  Mutasi Masuk KIB A';
            case 'Tabel Pengadaan Barang Inventaris':
                return 'Tabel Pengadaan Barang Inventaris';
            case 'Tabel Mutasi Keluar KIB A':
                return 'Tabel Mutasi Keluar KIB A';
            default:
                return 'Tabel Kartu Inventaris';
        }
    };

    return (
        <AppLayout>
            <Head title="Manage Kartu Inventaris" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-hidden rounded-xl p-4">
                <div className="flex w-full justify-between rounded-lg bg-gray-900 p-3 shadow-lg">
                    {/* Title and Table Name Row */}
                    <div className="mb-2 flex items-center justify-between">
                        <h2 className="ml-4 text-3xl font-semibold text-white">{getKIBTitle(selectedKIB)}</h2>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                    

                        <div className="flex flex-col gap-2">
                            {/* Add Data Button */}
                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        alert(`Tambah data untuk ${selectedKIB}`);
                                    }}
                                    className="w-full rounded-lg bg-gray-800 px-4 py-2 text-white shadow-md transition hover:bg-gray-700"
                                >
                                    Tambah Data
                                </button>
                                <button
                                    onClick={() => {
                                        window.open(`/export-excel?table=${encodeURIComponent(selectedKIB)}`, '_blank');
                                    }}
                                    className="w-full rounded-lg bg-gray-800 px-4 py-2 text-white shadow-md transition hover:bg-gray-700"
                                >
                                    Export Excel
                                </button>
                            </div>

                            {/* KIB Selection Dropdown */}
<div className="col-span-2 sm:col-span-1 md:col-span-2">
    <select
        value={selectedKIB}
        onChange={(e) => setSelectedKIB(e.target.value)}
        className="w-full rounded-lg border border-transparent bg-gray-700 px-3 py-1 text-white focus:ring-2 focus:ring-gray-100 focus:outline-none focus:bg-gray-800"
    >
        {kibList.map((kib) => (
            <option
                key={kib}
                value={kib}
                className="focus:bg-gray-800"
            >
                {kib}
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
                        {selectedKIB === 'KIB A' && <TableKibA data={kibA} />}
                        {selectedKIB === 'KIB B' && <TableKibB data={kibB} />}
                        {selectedKIB === 'KIB C' && <TableKibC data={kibC} />}
                        {selectedKIB === 'KIB D' && <TableKibD data={kibD} />}
                        {selectedKIB === 'KIB E' && <TableKibE data={kibE} />}
                        {selectedKIB === 'KIB F' && <TableKibF data={kibF} />}
                        {selectedKIB === 'Tabel Rekapitulasi' && <TableKibRekapitulasi data={kibRekapitulasi} />}
                        {selectedKIB === 'Tabel Mutasi Masuk KIB A' && <KibMutasiMasukTable data={mutasiMasuk} />}
                        {selectedKIB === 'Tabel Pengadaan Barang Inventaris' && <TablePengadaanBarangInventaris data={pengadaanBarangInventaris} />}
                        {selectedKIB === 'Tabel Mutasi Keluar KIB A' && <TableMutasiKeluarKibA data={mutasiKeluar} />}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
