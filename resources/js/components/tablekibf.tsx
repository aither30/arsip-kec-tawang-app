import { KibFItem } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface TableKibFProps {
  data: KibFItem[];
}

export default function TableKibF({ data }: TableKibFProps) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama Barang</TableHead>
            <TableHead>Konstruksi Bertingkat</TableHead>
            <TableHead>Konstruksi Beton</TableHead>
            <TableHead>Luas</TableHead>
            <TableHead>Lokasi</TableHead>
            <TableHead>Tanggal Dokumen</TableHead>
            <TableHead>Nomor Dokumen</TableHead>
            <TableHead>Tanggal Mulai</TableHead>
            <TableHead>Status Tanah</TableHead>
            <TableHead>Nomor Kode Tanah</TableHead>
            <TableHead>Asal Usul</TableHead>
            <TableHead>Nilai Kontrak</TableHead>
            <TableHead>Keterangan</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.nama_barang}</TableCell>
              <TableCell>{item.konstruksi_bertingkat}</TableCell>
              <TableCell>{item.konstruksi_beton}</TableCell>
              <TableCell>{item.luas.toLocaleString('id-ID')} m²</TableCell>
              <TableCell>{item.lokasi}</TableCell>
              <TableCell>{new Date(item.tanggal_dokumen).toLocaleDateString('id-ID')}</TableCell>
              <TableCell>{item.nomor_dokumen}</TableCell>
              <TableCell>{new Date(item.tanggal_mulai).toLocaleDateString('id-ID')}</TableCell>
              <TableCell>{item.status_tanah}</TableCell>
              <TableCell>{item.nomor_kode_tanah}</TableCell>
              <TableCell>{item.asal_usul}</TableCell>
              <TableCell>
                {item.nilai_kontrak.toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                })}
              </TableCell>
              <TableCell>{item.keterangan ?? '-'}</TableCell>
              <TableCell>{new Date(item.created_at).toLocaleDateString('id-ID')}</TableCell>
              <TableCell>{new Date(item.updated_at).toLocaleDateString('id-ID')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
