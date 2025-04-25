'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export interface KibAItem {
  nama_barang: string;
  nomor_kode_barang: string;
  nomor_register: string;
  luas_tanah: number;
  tahun_pengadaan: number;
  letak: string;
  hak: string;
  tanggal_serifikat: string;
  nomor_serifikat: string;
  penggunaan: string;
  asal_usul: string;
  harga: number;
  keterangan: string;
}

interface KibATableProps {
  data: KibAItem[]
}

export default function KibATable({ data }: KibATableProps) {
  return (
    <div className="overflow-auto border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Nama Barang</TableHead>
            <TableHead>Kode Barang</TableHead>
            <TableHead>No Register</TableHead>
            <TableHead>Luas Tanah (m²)</TableHead>
            <TableHead>Tahun</TableHead>
            <TableHead>Letak</TableHead>
            <TableHead>Hak</TableHead>
            <TableHead>Tgl Sertifikat</TableHead>
            <TableHead>No Sertifikat</TableHead>
            <TableHead>Penggunaan</TableHead>
            <TableHead>Asal Usul</TableHead>
            <TableHead>Harga</TableHead>
            <TableHead>Keterangan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.nama_barang}</TableCell>
              <TableCell>{item.nomor_kode_barang}</TableCell>
              <TableCell>{item.nomor_register}</TableCell>
              <TableCell>{item.luas_tanah}</TableCell>
              <TableCell>{item.tahun_pengadaan}</TableCell>
              <TableCell>{item.letak}</TableCell>
              <TableCell>{item.hak}</TableCell>
              <TableCell>{item.tanggal_serifikat}</TableCell>
              <TableCell>{item.nomor_serifikat}</TableCell>
              <TableCell>{item.penggunaan}</TableCell>
              <TableCell>{item.asal_usul}</TableCell>
              <TableCell>{item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</TableCell>
              <TableCell>{item.keterangan}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
