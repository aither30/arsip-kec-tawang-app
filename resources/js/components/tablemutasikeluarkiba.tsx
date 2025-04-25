import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MutasiKeluarKibAItem } from '@/types';

interface TableMutasiKeluarKibAProps {
    data: MutasiKeluarKibAItem[];
}

export default function TableMutasiKeluarKibA({ data }: TableMutasiKeluarKibAProps) {
    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Jenis Barang</TableHead>
                        <TableHead>Nama Barang</TableHead>
                        <TableHead>Merk / Type</TableHead>
                        <TableHead>No. Sertifikat</TableHead>
                        <TableHead>Asal Perolehan</TableHead>
                        <TableHead>Bahan</TableHead>
                        <TableHead>Tahun Beli</TableHead>
                        <TableHead>Ukuran Konstruksi</TableHead>
                        <TableHead>Satuan</TableHead>
                        <TableHead>Kondisi</TableHead>
                        <TableHead>Jumlah Barang Awal</TableHead>
                        <TableHead>Harga Awal</TableHead>
                        <TableHead>Mutasi Berkurang Jumlah</TableHead>
                        <TableHead>Mutasi Berkurang Harga</TableHead>
                        <TableHead>Mutasi Bertambah Jumlah</TableHead>
                        <TableHead>Mutasi Bertambah Harga</TableHead>
                        <TableHead>Jumlah Barang Akhir</TableHead>
                        <TableHead>Harga Akhir</TableHead>
                        <TableHead>Keterangan</TableHead>
                        <TableHead>Created At</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.jenis_barang}</TableCell>
                            <TableCell>{item.nama_barang ?? '-'}</TableCell>
                            <TableCell>{item.merk_type ?? '-'}</TableCell>
                            <TableCell>{item.no_sertifikat ?? '-'}</TableCell>
                            <TableCell>{item.asal_perolehan ?? '-'}</TableCell>
                            <TableCell>{item.bahan ?? '-'}</TableCell>
                            <TableCell>{item.tahun_beli ?? '-'}</TableCell>
                            <TableCell>{item.ukuran_konstruksi ?? '-'}</TableCell>
                            <TableCell>{item.satuan ?? '-'}</TableCell>
                            <TableCell>{item.kondisi ?? '-'}</TableCell>
                            <TableCell>{item.jumlah_barang_awal ?? '-'}</TableCell>
                            <TableCell>
                                {item.harga_awal?.toLocaleString('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR',
                                }) ?? '-'}
                            </TableCell>
                            <TableCell>{item.mutasi_berkurang_jumlah ?? '-'}</TableCell>
                            <TableCell>
                                {item.mutasi_berkurang_harga?.toLocaleString('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR',
                                }) ?? '-'}
                            </TableCell>
                            <TableCell>{item.mutasi_bertambah_jumlah ?? '-'}</TableCell>
                            <TableCell>
                                {item.mutasi_bertambah_harga?.toLocaleString('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR',
                                }) ?? '-'}
                            </TableCell>
                            <TableCell>{item.jumlah_barang_akhir ?? '-'}</TableCell>
                            <TableCell>
                                {item.harga_akhir?.toLocaleString('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR',
                                }) ?? '-'}
                            </TableCell>
                            <TableCell>{item.keterangan ?? '-'}</TableCell>
                            <TableCell>{new Date(item.created_at).toLocaleDateString('id-ID')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
