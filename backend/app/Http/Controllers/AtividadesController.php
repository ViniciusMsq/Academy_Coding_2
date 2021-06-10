<?php

namespace App\Http\Controllers;

use App\Models\Atividade;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AtividadesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return Atividade::all();
        return DB::table('atividades')
        ->select('*')
        ->orderBy('atividades.id_projeto')
        ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Atividade::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showAtividadesRecurso($id)
    {
        return DB::table('atividades')
        ->join('projetos', 'atividades.id_projeto', '=', 'projetos.id')
        ->select('atividades.id', 'projetos.nome', 'atividades.titulo', 'atividades.descricao', 'atividades.dt_inicial', 'atividades.dt_entrega', 'atividades.status', 'atividades.porcentagem')
        ->where('atividades.id_recurso', '=', $id)
        ->orderBy('atividades.status', 'asc')
        ->get();
    }

    public function concluidas(){
        return DB::table('atividades')
        ->select()->count();
        
    } 

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Atividade::findOrFail($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Atividade::findOrFail($id)->delete();
    }
}
