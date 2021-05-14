<?php

use App\Http\Controllers\EquipesController;
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

Route::get('/equipes', [EquipesController::class, 'index']);
Route::post('/equipes', [EquipesController::class, 'store']);
Route::put('/equipes/{id}', [EquipesController::class, 'update']);
Route::delete('/equipes/{id}', [EquipesController::class, 'destroy']);
