import { SuratMasuk } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SuratMasukTableProps {
  data: SuratMasuk[];
}

const SuratMasukTable = ({ data }: SuratMasukTableProps) => {
    if (!data || data.length === 0) {
        return <div className="text-center text-white">Tidak ada data Surat Masuk</div>;
      }
  return (
    <div className="w-full overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Tanggal Terima</TableHead>
            <TableHead>Pengirim</TableHead>
            <TableHead>Nomor Surat</TableHead>
            <TableHead>Hal/Isi Surat</TableHead>
            <TableHead>Lampiran</TableHead>
            <TableHead>Diteruskan Kepada</TableHead>
            <TableHead>Keterangan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((surat) => (
              <TableRow key={surat.id} className="hover:bg-muted/50">
                <TableCell>{surat.no}</TableCell>
                <TableCell>{surat.tanggal_terima}</TableCell>
                <TableCell>{surat.pengirim}</TableCell>
                <TableCell>{surat.nomor_surat}</TableCell>
                <TableCell>{surat.hal_isi_surat}</TableCell>
                <TableCell>{surat.lampiran}</TableCell>
                <TableCell>{surat.diteruskan_kepada}</TableCell>
                <TableCell>{surat.keterangan}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} className="text-center">
                Tidak ada data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default SuratMasukTable;
