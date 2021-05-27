<?php

namespace App\Http\Controllers;

use App\Models\Recurso;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RecursosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return Recurso::all();
        return DB::table('recursos')
        ->join('equipes', 'recursos.id_equipe', '=', 'equipes.id')
        ->select('recursos.id','recursos.id_equipe','recursos.nome','equipes.descricao','recursos.email','recursos.telefone','recursos.login','recursos.senha')
        ->orderBy('recursos.nome', 'asc')
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
        recurso::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        Recurso::findOrFail($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('atividades')
        ->where('id_recurso','=', $id)
        ->delete();

        DB::table('projetos')
        ->where('id_recurso','=',$id)
        ->delete();

        Recurso::findOrFail($id)->delete();
    }
}
