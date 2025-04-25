import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

interface AppHomeProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[]; // <== Tambah ini
  }

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

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

export interface KibBItem {
    id: number;
    kode_barang: string;
    nama_barang: string;
    nomor_register: string;
    merk: string;
    ukuran: number;
    bahan: string;
    tahun_pembelian: number;
    pabrik: string;
    rangka: string;
    mesin: string;
    polisi: string;
    bpkb: string;
    asal: string;
    harga: number;
    keterangan: string;
}

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
    tanggal_dokumen_gedung: string; // ISO Date string
    nomor_dokumen_gedung: string;
    luas: number;
    status_tanah: string;
    harga: number;
    nomor_kode_tanah: string;
    asal: string;
    keterangan: string;
    created_at?: string;
    updated_at?: string;
}

export interface KibDItem {
    id: number;
    nama_barang: string;
    kode_barang: string;
    nomor_register: string;
    konstruksi: string;
    panjang: number;
    lebar: number;
    luas: number;
    lokasi: string;
    tanggal_dokumen: string;
    nomor_dokumen: string;
    status_tanah: string;
    nomor_kode_tanah: string;
    asal_usul: string;
    kondisi: 'B' | 'KB' | 'RB';
    keterangan?: string;
}


export interface KibEItem {
    id: number;
    nama_barang: string;
    kode_barang: string;
    nomor_register: string;
    judul_pencipta: string;
    spesifikasi: string;
    asal_daerah: string;
    pencipta: string;
    bahan: string;
    jenis: string;
    ukuran: string;
    jumlah: number;
    tahun_cetak_pembelian: string;
    asal_usul: string;
    harga: number;
    created_at: string;
    updated_at: string;
  }
  
  export interface KibFItem {
    id: number;
    nama_barang: string;
    konstruksi_bertingkat: string;
    konstruksi_beton: string;
    luas: number;
    lokasi: string;
    tanggal_dokumen: string;
    nomor_dokumen: string;
    tanggal_mulai: string;
    status_tanah: string;
    nomor_kode_tanah: string;
    asal_usul: string;
    nilai_kontrak: number;
    keterangan?: string | null;
    created_at: string;
    updated_at: string;
  }
  export interface KibRekapitulasiItem {
    id: number;
    jenis_barang: string;
    tanggal_surat_pesanan: string | null;
    nomor_surat_pesanan: string | null;
    tanggal_dpa_spm: string | null;
    nomor_dpa_spm: string | null;
    jumlah_barang: number;
    harga_satuan: number;
    jumlah_harga: number;
    dipergunakan_untuk: string | null;
    keterangan: string | null;
    created_at: string;
    updated_at: string;
  }
    