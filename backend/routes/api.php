<?php

use App\Http\Controllers\EquipesController;
use App\Http\Controllers\RecursosController;
use Illuminate\Http\Request;
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
Route::delete('/equipes/{id}', [EquipesController::class, 'destroy']);

//Rotas recursos
Route::get('/recursos', [RecursosController::class, 'index']);
Route::post('/recursos', [RecursosController::class, 'store']);
Route::put('/recursos/{id}', [RecursosController::class, 'update']);
Route::delete('/recursos/{id}', [RecursosController::class, 'destroy']);
