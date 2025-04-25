import { KibEItem } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface TableKibEProps {
  data: KibEItem[];
}

export default function TableKibE({ data }: TableKibEProps) {
  return (
    <div className="overflow-x-auto border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Nama Barang</TableHead>
            <TableHead>Kode Barang</TableHead>
            <TableHead>Nomor Register</TableHead>
            <TableHead>Judul/Pencipta</TableHead>
            <TableHead>Spesifikasi</TableHead>
            <TableHead>Asal Daerah</TableHead>
            <TableHead>Pencipta</TableHead>
            <TableHead>Bahan</TableHead>
            <TableHead>Jenis</TableHead>
            <TableHead>Ukuran</TableHead>
            <TableHead>Jumlah</TableHead>
            <TableHead>Tahun Cetak</TableHead>
            <TableHead>Asal Usul</TableHead>
            <TableHead>Harga</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.nama_barang}</TableCell>
              <TableCell>{item.kode_barang}</TableCell>
              <TableCell>{item.nomor_register}</TableCell>
              <TableCell>{item.judul_pencipta}</TableCell>
              <TableCell>{item.spesifikasi}</TableCell>
              <TableCell>{item.asal_daerah}</TableCell>
              <TableCell>{item.pencipta}</TableCell>
              <TableCell>{item.bahan}</TableCell>
              <TableCell>{item.jenis}</TableCell>
              <TableCell>{item.ukuran}</TableCell>
              <TableCell>{item.jumlah}</TableCell>
              <TableCell>{item.tahun_cetak_pembelian}</TableCell>
              <TableCell>{item.asal_usul}</TableCell>
              <TableCell>
                {item.harga.toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                })}
              </TableCell>
              <TableCell>{new Date(item.created_at).toLocaleDateString('id-ID')}</TableCell>
              <TableCell>{new Date(item.updated_at).toLocaleDateString('id-ID')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
