<?php

namespace App\Http\Controllers;

use App\Models\Recurso;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use stdClass;

class EmailController extends Controller{

    public function enviarEmail(){
        $recursos = Recurso::all();

        $user = new stdClass();
        foreach ($recursos as $recurso) {
            $user->nome = $recurso->nome;
            $user->email = $recurso->email;
            Mail::send(new \App\Mail\envioEmail($user));
        }
       
    
        return Redirect::to('pdf');
    }
}

