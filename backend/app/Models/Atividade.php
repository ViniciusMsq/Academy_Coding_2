<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Atividade extends Model
{
    public $timestamps = false;
    protected $table = 'atividades';
    protected $primaryKey = 'id';
    use HasFactory;

    protected $fillable = [
        'id_projeto',
        'id_recurso',
        'titulo',
        'descricao',
        'dt_inicial',
        'dt_entrega',
        'status',
        'porcentagem'
    ];
}
