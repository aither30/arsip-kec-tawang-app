'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { KibBItem } from '@/types'; // kalau kamu pisahkan interface-nya

interface KibBTableProps {
    data: KibBItem[];
}

export default function KibBTable({ data }: KibBTableProps) {
    return (
        <div className="overflow-auto rounded-xl border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>No</TableHead>
                        <TableHead>Kode Barang</TableHead>
                        <TableHead>Nama Barang</TableHead>
                        <TableHead>No Register</TableHead>
                        <TableHead>Merk</TableHead>
                        <TableHead>Ukuran</TableHead>
                        <TableHead>Bahan</TableHead>
                        <TableHead>Tahun Pembelian</TableHead>
                        <TableHead>Pabrik</TableHead>
                        <TableHead>Rangka</TableHead>
                        <TableHead>Mesin</TableHead>
                        <TableHead>No Polisi</TableHead>
                        <TableHead>BPKB</TableHead>
                        <TableHead>Asal</TableHead>
                        <TableHead>Harga</TableHead>
                        <TableHead>Keterangan</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={item.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item.kode_barang}</TableCell>
                            <TableCell>{item.nama_barang}</TableCell>
                            <TableCell>{item.nomor_register}</TableCell>
                            <TableCell>{item.merk}</TableCell>
                            <TableCell>{item.ukuran}</TableCell>
                            <TableCell>{item.bahan}</TableCell>
                            <TableCell>{item.tahun_pembelian}</TableCell>
                            <TableCell>{item.pabrik}</TableCell>
                            <TableCell>{item.rangka}</TableCell>
                            <TableCell>{item.mesin}</TableCell>
                            <TableCell>{item.polisi}</TableCell>
                            <TableCell>{item.bpkb}</TableCell>
                            <TableCell>{item.asal}</TableCell>
                            <TableCell>{item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</TableCell>

                            <TableCell>{item.keterangan}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
