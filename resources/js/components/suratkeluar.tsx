import { SuratKeluar } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SuratKeluarTableProps {
  data: SuratKeluar[];
}

const SuratKeluarTable = ({ data }: SuratKeluarTableProps) => {
    if (!data || data.length === 0) {
        return <div className="text-center text-white">Tidak ada data Surat Masuk</div>;
      }
  return (
    <div className="w-full overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Tanggal</TableHead>
            <TableHead>Nomor Surat</TableHead>
            <TableHead>Index Surat</TableHead>
            <TableHead>Dikirimkan Kepada</TableHead>
            <TableHead>Isi Surat</TableHead>
            <TableHead>Keterangan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((surat) => (
              <TableRow key={surat.id}>
                <TableCell>{surat.no}</TableCell>
                <TableCell>{surat.tanggal}</TableCell>
                <TableCell>{surat.nomor_surat}</TableCell>
                <TableCell>{surat.index_surat}</TableCell>
                <TableCell>{surat.dikirimkan_kepada}</TableCell>
                <TableCell>{surat.isi_surat}</TableCell>
                <TableCell>{surat.keterangan}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                Tidak ada data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default SuratKeluarTable;
