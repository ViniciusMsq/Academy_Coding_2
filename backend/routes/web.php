<?php

use App\Http\Controllers\PdfController;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    Mail::send('mail.academy', ['url' => 'http://localhost:8000/pdf'], function($m){
        $m->from('viniciusm.gc27@gmail.com', 'Vinicius');
        $m->subject('Gerenciador de atividades');
        $m->to('canalprogramandofuturo@gmail.com');
    });
});

Route::get('pdf', [PdfController::class, 'geraPdf']);


