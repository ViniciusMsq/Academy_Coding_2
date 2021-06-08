<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF</title>

    <style>
        h1{
            text-align: center;
        }
        table{
            background-color: #fefefe;
            border-radius: 5px;
            border: 1px solid #ccc;
            text-align: center;
            width: 100%;
            font-size: 10px;
        }

        table td,
        table tg{
            border: 1px solid #ccc;
        }

        table th{
            background-color: #eee;
        }
    </style>
</head>
<body>
<h1>Relatórios</h1>
<hr>
<h3>Estado Recursos</h3>
<p> - Dados demonstrativos para auxiliar na visualização do desempenho de cada recurso com base no aumento de atividades </p>
<hr>
<table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Atividades concluidas</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($rec as $recurso)
            <tr>
                <td scope="row">{{$recurso->nome}}</td>
                <td>{{$recurso->atividades_concluidas}}</td>
            </tr>
            @endforeach
        </tbody>
</table>
<h3>Estado atividades</h3>
<p> - Dados demonstrativos para auxiliar na visualização de cada uma das atividades </p>

<hr>
<table>
      <thead>
        <tr>
          <th scope="col">#Id</th>
          <th scope="col">Proj.</th>
          <th scope="col">Rec.</th>
          <th scope="col">Titulo</th>
          <th scope="col">Descrição</th>
          <th scope="col">Inicio</th>
          <th scope="col">Entrega</th>
          <th scope="col">Stats</th>
        </tr>
      </thead>
      <tbody>
      @foreach ($atv as $atividade)
        <tr>
          <td scope="row">{{$atividade->id}}</td>
          <td>{{$atividade->id_projeto}}</td>
          <td>{{$atividade->nome}}</td>
          <td>{{$atividade->titulo}}</td>
          <td style="width: 35%;">{{$atividade->descricao}}</td>
          <td>{{$atividade->dt_inicial}}</td>
          <td>{{$atividade->dt_entrega}}</td>
          <td>{{$atividade->status}}</td>
        </tr>
        @endforeach
      </tbody>
    </table>
</body>
</html>