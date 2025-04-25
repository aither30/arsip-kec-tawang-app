import TableKibA from '@/components/tablekiba';
import TableKibB from '@/components/tablekibb';
import TableKibC from '@/components/tablekibc';
import TableKibD from '@/components/tablekibd';
import TableKibE from '@/components/tablekibe';
import TableKibF from '@/components/tablekibf';
import TableKibRekapitulasi from '@/components/tablerekapitulasi';
import { KibAItem, KibBItem, KibCItem, KibDItem, KibEItem, KibFItem, KibRekapitulasiItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const kibList = ['KIB A', 'KIB B', 'KIB C', 'KIB D', 'KIB E', 'KIB F', 'Table Rekapitulasi'];

interface ManageProps {
    kibA: KibAItem[];
    kibB: KibBItem[];
    kibC: KibCItem[];
    kibD: KibDItem[];
    kibE: KibEItem[];
    kibF: KibFItem[];
    tableRekapitulasi: KibRekapitulasiItem[];
}

export default function Manage({ kibA, kibB, kibC, kibD, kibE, kibF, tableRekapitulasi }: ManageProps) {
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
            case 'KIB A': return 'Tabel Kartu Inventaris Barang A';
            case 'KIB B': return 'Tabel Kartu Inventaris Barang B';
            case 'KIB C': return 'Tabel Kartu Inventaris Barang C';
            case 'KIB D': return 'Tabel Kartu Inventaris Barang D';
            case 'KIB E': return 'Tabel Kartu Inventaris Barang E';
            case 'KIB F': return 'Tabel Kartu Inventaris Barang F';
            case 'Tabel Rekapitulasi': return 'Tabel Rekapitulasi';
            default: return 'Tabel Kartu Inventaris';
        }
    };

    return (
        <AppLayout>
            <Head title="Manage Kartu Inventaris" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-hidden">
                <div className="flex justify-between items-center">
                    <h2 className="mb-4 text-xl font-semibold">{getKIBTitle(selectedKIB)}</h2>
                    <select
                        value={selectedKIB}
                        onChange={(e) => setSelectedKIB(e.target.value)}
                        className="rounded-lg border bg-black px-3 py-2 shadow-sm"
                    >
                        {kibList.map((kib) => (
                            <option key={kib} value={kib}>
                                {kib}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="h-full flex w-full">
                    <div id="mainContent" className="border-sidebar-border/70 dark:border-sidebar-border rounded-xl border bg-white p-4 md:min-h-min dark:bg-neutral-900 overflow-auto w-full">
                        {selectedKIB === 'KIB A' && <TableKibA data={kibA} />}
                        {selectedKIB === 'KIB B' && <TableKibB data={kibB} />}
                        {selectedKIB === 'KIB C' && <TableKibC data={kibC} />}
                        {selectedKIB === 'KIB D' && <TableKibD data={kibD} />}
                        {selectedKIB === 'KIB E' && <TableKibE data={kibE} />}
                        {selectedKIB === 'KIB F' && <TableKibF data={kibF} />}
                        {selectedKIB === 'Table Rekapitulasi' && <TableKibRekapitulasi data={tableRekapitulasi} />}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
