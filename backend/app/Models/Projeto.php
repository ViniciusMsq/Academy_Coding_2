<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projeto extends Model
{
    public $timestamps = false;
    protected $table = 'projetos';
    protected $primaryKey = 'id';
    use HasFactory;

    //campos referente a tabela
    protected $fillable = [
        'id_recurso',
        'nome',
        'descricao',
        'dt_inicial',
        'prazo'
    ];
}
