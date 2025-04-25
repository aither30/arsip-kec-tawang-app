<?php

namespace App\Http\Controllers\Kib;

use App\Models\KibA;
use App\Models\KibB;
use App\Models\KibC;
use App\Models\KibD;
use App\Models\KibE;
use App\Models\KibF;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\KibRekapitulasi;
use App\Models\MutasiKeluarKibA;
use App\Models\KibMutasiMasukKibA;
use App\Http\Controllers\Controller;
use App\Models\PengadaanBarangInventaris;

class KibController extends Controller
{
    public function manage(Request $request)
    {
        $month = $request->input('month'); // contoh: 04
        $year = $request->input('year');   // contoh: 2025

        return Inertia::render('kib/manage', [
            'kibA' => $this->filterByMonthYear(KibA::query(), $month, $year),
            'kibB' => $this->filterByMonthYear(KibB::query(), $month, $year),
            'kibC' => $this->filterByMonthYear(KibC::query(), $month, $year),
            'kibD' => $this->filterByMonthYear(KibD::query(), $month, $year),
            'kibE' => $this->filterByMonthYear(KibE::query(), $month, $year),
            'kibF' => $this->filterByMonthYear(KibF::query(), $month, $year),
            'kibRekapitulasi' => $this->filterByMonthYear(KibRekapitulasi::query(), $month, $year),
            'mutasiMasuk' => $this->filterByMonthYear(KibMutasiMasukKibA::query(), $month, $year),
            'mutasiKeluar' => $this->filterByMonthYear(MutasiKeluarKibA::query(), $month, $year),
            'pengadaanBarangInventaris' => $this->filterByMonthYear(PengadaanBarangInventaris::query(), $month, $year),
        ]);
    }

    private function filterByMonthYear($query, $month, $year)
    {
        return $query->when($month && $year, function ($q) use ($month, $year) {
            $q->whereMonth('tanggal', $month)
              ->whereYear('tanggal', $year);
        })->get();
    }
}
