<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\surat\SuratController;
use App\Http\Controllers\Kib\KibController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});
Route::get('manageKib', [KibController::class, 'manage'])->name('kib/manage');
Route::get('manageSurat', [SuratController::class, 'manage'])->name('surat/manage');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
