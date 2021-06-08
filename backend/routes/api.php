<?php

use App\Http\Controllers\AtividadesController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\EquipesController;
use App\Http\Controllers\ProjetosController;
use App\Http\Controllers\RecursosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Rotas equipes
Route::get('/equipes', [EquipesController::class, 'index']);
Route::post('/equipes', [EquipesController::class, 'store']);
Route::put('/equipes/{id}', [EquipesController::class, 'update']);
//Route::delete('/equipes/{id}', [EquipesController::class, 'destroy']);

//Rotas recursos
Route::get('/recursos', [RecursosController::class, 'index']);
Route::get('/gestores', [RecursosController::class, 'getGestores']);
Route::get('/naogestores', [RecursosController::class, 'getNotGestores']);
Route::get('/barchart', [RecursosController::class, 'getDadosBarchart']);
Route::post('/recursos', [RecursosController::class, 'store']);
Route::put('/recursos/{id}', [RecursosController::class, 'update']);
Route::put('/recursosAtividades/{id}', [RecursosController::class, 'somando']);
//Route::delete('/recursos/{id}', [RecursosController::class, 'destroy']);

//Rotas Projetos
Route::get('/projetos', [ProjetosController::class, 'index']);
Route::post('/projetos', [ProjetosController::class, 'store']);
Route::put('/projetos/{id}', [ProjetosController::class, 'update']);
Route::delete('/projetos/{id}', [ProjetosController::class, 'destroy']);

//Rotas Atividades
Route::get('/atividades', [AtividadesController::class, 'index']);
Route::get('/atividades/{id}', [AtividadesController::class, 'showAtividadesRecurso']);
//Route::get('/atividades/concluidas', [AtividadesController::class, 'concluidas']);
Route::post('/atividades', [AtividadesController::class, 'store']);
Route::put('/atividades/{id}', [AtividadesController::class, 'update']);
Route::delete('/atividades/{id}', [AtividadesController::class, 'destroy']);

//rota email
Route::get('envio-email', [EmailController::class, 'enviarEmail']);
