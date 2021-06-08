<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Atividade;
use PDF;
use app\Http\Controllers\AtividadesController;
use Illuminate\Support\Facades\DB;

class PdfController extends Controller{

    public function geraPdf(){
        $atv = DB::table('atividades')
        ->join('recursos', 'atividades.id_recurso', '=', 'recursos.id')
        ->select('atividades.id', 'atividades.id_projeto','recursos.nome', 'atividades.titulo', 'atividades.descricao', 'atividades.dt_inicial', 'atividades.dt_entrega', 'atividades.status', 'recursos.atividades_concluidas')
        ->orderBy('atividades.id_projeto', 'asc')
        ->get();

        $rec = DB::table('recursos')
        ->select('nome', 'atividades_concluidas')
        ->where('id_equipe', '<>', 1)
        ->orderBy('nome', 'asc')
        ->get();

          
        $pdf = PDF::loadView('pdf', compact('atv', 'rec'));
    
        return $pdf->setPaper('a4')->stream('Relatorios.pdf');
    }
}

