<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Tabel KIB-A
        Schema::create('kib_c', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nama_barang');
            $table->string('kode_barang');
            $table->string('nomor_register');
            $table->string('kondisi_bangunan')->('B', 'kb');
            $table->decimal('ukuran', 10, 2);
            $table->string('bahan');
            $table->year('tahun_pembelian');
            $table->string('pabrik');
            $table->string('rangka');
            $table->string('mesin');
            $table->string('polisi');
            $table->string('bpkb');
            $table->string('asal');
            $table->string('harga');
            $table->text('keterangan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kib_a');
    }
};
