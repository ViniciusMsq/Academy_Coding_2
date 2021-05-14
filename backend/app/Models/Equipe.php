<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipe extends Model
{
    public $timestamps = false;
    protected $table = 'equipes';
    protected $primaryKey = 'id';
    use HasFactory;

    protected $fillable = [
        'descricao'
    ];
}
