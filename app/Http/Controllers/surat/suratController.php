<?php

namespace App\Http\Controllers\surat;

use Inertia\Inertia;
use App\Models\SuratMasuk;
use App\Models\SuratKeluar;
use App\Http\Controllers\Controller;

class suratController extends Controller
{
    public function manage()
    {
        $suratMasuk = SuratMasuk::all();
        $suratKeluar = SuratKeluar::all();

        return Inertia::render('surat/manage', [
            'suratmasuk' => $suratMasuk,
            'suratkeluar' => $suratKeluar,
        ]);
    }
}
