@component('mail::message')

<h1>Relatorios</h1>

<p>Olá, {{$user->nome}}, segue acesso para PDF de relatorios</p>

@component('mail::button', ['url' => 'http://localhost:8000/pdf'])
    Acessar PDF
@endcomponent
@endcomponent