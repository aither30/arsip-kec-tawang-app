<?php

namespace App\Http\Controllers\Kib;

use App\Models\KibA;
use App\Models\KibB;
use App\Models\KibC;
use App\Models\KibD;
use App\Models\KibE;
use App\Models\KibF;
use Inertia\Inertia;
use App\Models\KibRekapitulasi;
use App\Models\MutasiKeluarKibA;
use App\Models\KibMutasiMasukKibA;
use App\Http\Controllers\Controller;
use App\Models\PengadaanBarangInventaris;

class KibController extends Controller
{
    public function manage()
    {
        $kibA = KibA::all();
        $kibB = KibB::all();
        $kibC = KibC::all();
        $kibD = KibD::all();
        $kibE = KibE::all();
        $kibF = KibF::all();
        $kibrekapitulasi = KibRekapitulasi::all();
        $MutasiMasuk = KibMutasiMasukKibA::all();
        $mutasiKeluar = MutasiKeluarKibA::all();
        $pengadaanBarangInventaris = PengadaanBarangInventaris::all();
        
        
        return Inertia::render('kib/manage', [
    'kibA' => $kibA,
    'kibB' => $kibB,
    'kibC' => $kibC,
    'kibD' => $kibD,
    'kibE' => $kibE,
    'kibF' => $kibF,
    'kibRekapitulasi' => $kibrekapitulasi,
    'mutasiMasuk' => $MutasiMasuk,
    'mutasiKeluar' => $mutasiKeluar,
    'pengadaanBarangInventaris' => $pengadaanBarangInventaris,
]);

    }
}
