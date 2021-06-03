<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recurso extends Model
{
    public $timestamps = false;
    protected $table = 'recursos';
    protected $primaryKey = 'id';
    use HasFactory;

    protected $fillable = [
        'id_equipe',
        'nome',
        'email',
        'telefone',
        'login',
        'senha',
        'atividades_concluidas'
    ];
}
