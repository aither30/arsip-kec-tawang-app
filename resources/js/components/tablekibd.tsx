'use client'

import { KibDItem } from '@/types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


interface KibDTableProps {
  data: KibDItem[]
}

export default function KibDTable({ data }: KibDTableProps) {
  return (
    <div className="overflow-auto border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Nama Barang</TableHead>
            <TableHead>Kode Barang</TableHead>
            <TableHead>No Register</TableHead>
            <TableHead>Konstruksi</TableHead>
            <TableHead>Panjang (m)</TableHead>
            <TableHead>Lebar (m)</TableHead>
            <TableHead>Luas (m²)</TableHead>
            <TableHead>Lokasi</TableHead>
            <TableHead>Tanggal Dokumen</TableHead>
            <TableHead>No Dokumen</TableHead>
            <TableHead>Status Tanah</TableHead>
            <TableHead>Kode Tanah</TableHead>
            <TableHead>Asal Usul</TableHead>
            <TableHead>Kondisi</TableHead>
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
              <TableCell>{item.konstruksi}</TableCell>
              <TableCell>{item.panjang}</TableCell>
              <TableCell>{item.lebar}</TableCell>
              <TableCell>{item.luas}</TableCell>
              <TableCell>{item.lokasi}</TableCell>
              <TableCell>{item.tanggal_dokumen}</TableCell>
              <TableCell>{item.nomor_dokumen}</TableCell>
              <TableCell>{item.status_tanah}</TableCell>
              <TableCell>{item.nomor_kode_tanah}</TableCell>
              <TableCell>{item.asal_usul}</TableCell>
              <TableCell>{item.kondisi}</TableCell>
              <TableCell>{item.keterangan || '-'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
