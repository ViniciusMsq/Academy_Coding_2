import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AtividadeModel } from '../cad-atividades/atividade.model';
import { AtividadesService } from '../cad-atividades/atividades.service';
import { RecursoModel } from '../cad-recursos/recurso.model';
import { RecursosService } from '../cad-recursos/recursos.service';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute, 
    private atividadeService:AtividadesService,
    private recursoService:RecursosService) {}

    
  id = this.route.snapshot.params.id;
  equipe = this.route.snapshot.params.equipe;

  gestor:boolean = false;
  idUsuario: number;


  atividades: Array<any> = new Array();
  atividadeAux: AtividadeModel = new AtividadeModel();


  recursos: Array<any> = new Array();
  recurso: RecursoModel = new RecursoModel();


  ngOnInit(): void {
    this.gestor=this.authService.usuario_gestor();
    this.idUsuario = this.authService.usuario_id();
    this.listarAtividadeIdUser();
    this.listarNaoGestores();
  }

  listarAtividadeIdUser(){
    this.atividadeService.listarAtividadesRecurso(this.idUsuario).subscribe(atividades =>{
      this.atividades = atividades;
    }), err => {
      console.log("erro ao listar atividade", err);
      
    }
  }
  
  listarNaoGestores(){
    this.recursoService.listarNaoGestores().subscribe(recursos =>{
      this.recursos = recursos;
    }), err => {
      console.log("erro ao listar recursos", err);
      
    }
  }

  atualizarRecursos(id:Number, status:string){

    if(status === 'concluida'){
      this.recursoService.atualizarRecursosAtividades(id, this.recurso).subscribe(recurso =>{
          this.recurso = new RecursoModel();
          this.listarNaoGestores();
        }, err =>{
          console.log("Erro ao atualizar recursos", err);
        })

    }else{
      console.log("P F");
    }
  }

  atualizarStatus(id:Number){
    this.atividadeService.atualizarAtividade(id, this.atividadeAux).subscribe(atividade =>{
      this.atividadeAux = new AtividadeModel();
      this.listarAtividadeIdUser();
    }, err =>{
      console.log("Erro ao atualizar atividade", err);
    })
  }

  enviarEmail(){
    
    
    //this.http.get('http://localhost:8000/api/envio-email');
    
    console.log("passou no envio");

    window.open('http://localhost:8000/api/envio-email', '_blank');
  }
  
  validadeData(dataf:string){
    var hoje = new Date();
    var entrega = new Date(dataf);

    const diff = (entrega.getTime() - hoje.getTime());
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    console.log(days);
    return days;
  }
}
