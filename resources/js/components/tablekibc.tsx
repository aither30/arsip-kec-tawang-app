'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export interface KibCItem {
  id: number;
  nama_barang: string;
  kode_barang: string;
  nomor_register: string;
  kondisi_bangunan: string;
  bertingkat: string;
  beton: string;
  luas_lantai: number;
  lokasi: string;
  tanggal_dokumen_gedung: string;
  nomor_dokumen_gedung: string;
  luas: number;
  status_tanah: string;
  harga: number;
  nomor_kode_tanah: string;
  asal: string;
  keterangan: string;
}

interface KibCTableProps {
  data: KibCItem[]
}

export default function KibCTable({ data }: KibCTableProps) {
  return (
    <div className="overflow-auto border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Nama Barang</TableHead>
            <TableHead>Kode Barang</TableHead>
            <TableHead>No Register</TableHead>
            <TableHead>Kondisi Bangunan</TableHead>
            <TableHead>Bertingkat</TableHead>
            <TableHead>Beton</TableHead>
            <TableHead>Luas Lantai (m²)</TableHead>
            <TableHead>Lokasi</TableHead>
            <TableHead>Tanggal Dokumen</TableHead>
            <TableHead>No Dokumen</TableHead>
            <TableHead>Luas (m²)</TableHead>
            <TableHead>Status Tanah</TableHead>
            <TableHead>Harga</TableHead>
            <TableHead>Kode Tanah</TableHead>
            <TableHead>Asal</TableHead>
            <TableHead>Keterangan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.nama_barang}</TableCell>
              <TableCell>{item.kode_barang}</TableCell>
              <TableCell>{item.nomor_register}</TableCell>
              <TableCell>{item.kondisi_bangunan}</TableCell>
              <TableCell>{item.bertingkat}</TableCell>
              <TableCell>{item.beton}</TableCell>
              <TableCell>{item.luas_lantai}</TableCell>
              <TableCell>{item.lokasi}</TableCell>
              <TableCell>{item.tanggal_dokumen_gedung}</TableCell>
              <TableCell>{item.nomor_dokumen_gedung}</TableCell>
              <TableCell>{item.luas}</TableCell>
              <TableCell>{item.status_tanah}</TableCell>
              <TableCell>{item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</TableCell>
              <TableCell>{item.nomor_kode_tanah}</TableCell>
              <TableCell>{item.asal}</TableCell>
              <TableCell>{item.keterangan}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
