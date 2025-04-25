import { KibRekapitulasiItem } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface TableKibRekapitulasiProps {
  data: KibRekapitulasiItem[];
}

export default function TableKibRekapitulasi({ data }: TableKibRekapitulasiProps) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Jenis Barang</TableHead>
            <TableHead>Tanggal Surat Pesanan</TableHead>
            <TableHead>Nomor Surat Pesanan</TableHead>
            <TableHead>Tanggal DPA/SPM</TableHead>
            <TableHead>Nomor DPA/SPM</TableHead>
            <TableHead>Jumlah Barang</TableHead>
            <TableHead>Harga Satuan</TableHead>
            <TableHead>Jumlah Harga</TableHead>
            <TableHead>Dipergunakan Untuk</TableHead>
            <TableHead>Keterangan</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.jenis_barang}</TableCell>
              <TableCell>{item.tanggal_surat_pesanan ? new Date(item.tanggal_surat_pesanan).toLocaleDateString('id-ID') : '-'}</TableCell>
              <TableCell>{item.nomor_surat_pesanan ?? '-'}</TableCell>
              <TableCell>{item.tanggal_dpa_spm ? new Date(item.tanggal_dpa_spm).toLocaleDateString('id-ID') : '-'}</TableCell>
              <TableCell>{item.nomor_dpa_spm ?? '-'}</TableCell>
              <TableCell>{item.jumlah_barang}</TableCell>
              <TableCell>
                {item.harga_satuan.toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                })}
              </TableCell>
              <TableCell>
                {item.jumlah_harga.toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                })}
              </TableCell>
              <TableCell>{item.dipergunakan_untuk ?? '-'}</TableCell>
              <TableCell>{item.keterangan ?? '-'}</TableCell>
              <TableCell>{new Date(item.created_at).toLocaleDateString('id-ID')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
