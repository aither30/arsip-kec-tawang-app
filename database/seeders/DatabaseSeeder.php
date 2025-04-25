<?php

namespace Database\Seeders;

use App\Models\KibA;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\KibB;
use App\Models\KibC;
use App\Models\KibD;
use App\Models\KibE;
use App\Models\KibF;
use App\Models\User;
use App\Models\KibRekapitulasi;
use Illuminate\Database\Seeder;
use App\Models\MutasiKeluarKibA;
use App\Models\KibMutasiMasukKibA;
use Illuminate\Support\Facades\Hash;
use App\Models\PengadaanBarangInventaris;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Alpi Darul Hakim',
            'email' => 'alpidarulhakim30@gmail.com',
            'password' => Hash::make('alpi30052003'),
        ]);

        KibA::factory(10)->create();
        KibB::factory(10)->create();
        KibC::factory(10)->create();
        KibD::factory(10)->create();
        KibE::factory(10)->create();
        KibF::factory(10)->create();
        KibRekapitulasi::factory(10)->create();
        KibMutasiMasukKibA::factory(10)->create();
        PengadaanBarangInventaris::factory(10)->create();
        MutasiKeluarKibA::factory(10)->create();
    }
}
