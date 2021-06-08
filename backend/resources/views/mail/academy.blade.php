@component('mail::message')

<h1>Relatorio</h1>
@component('mail::button', ['url' => 'http://localhost:8000/pdf'])
Acessar PDF
@endcomponent
Link do pdf {{$url}}

@endcomponent