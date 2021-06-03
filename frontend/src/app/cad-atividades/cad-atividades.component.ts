import { Component, OnInit } from '@angular/core';
import { ProjetosService } from '../cad-projetos/projetos.service';
import { RecursosService } from '../cad-recursos/recursos.service';
import { AtividadeModel } from './atividade.model';
import { AtividadesService } from './atividades.service';

@Component({
  selector: 'app-cad-atividades',
  templateUrl: './cad-atividades.component.html',
  styleUrls: ['./cad-atividades.component.css']
})
export class CadAtividadesComponent implements OnInit {

  atividades: Array<any> = new Array();
  atividade: AtividadeModel = new AtividadeModel();

  projetos: Array<any> = new Array();
  recursos: Array<any> = new Array();
  constructor(private atividadeService: AtividadesService, private recursoService:RecursosService, private projetoService:ProjetosService) { }

  ngOnInit(): void {
    this.listarAtividade();
    this.listarNaoGestores();
    this.listarProjetos();
  }

  listarProjetos(){
    this.projetoService.listarProjetos().subscribe(projetos =>{
      this.projetos = projetos;
    }), err => {
      console.log("erro ao listar projetos", err);
      
    }
  }
  listarNaoGestores(){
    this.recursoService.listarNaoGestores().subscribe(recursos =>{
      this.recursos = recursos;
    }), err => {
      console.log("erro ao listar recursos", err);
      
    }
  }

  listarAtividade(){
    this.atividadeService.listarAtividades().subscribe(atividades =>{
      this.atividades = atividades;
    }), err => {
      console.log("erro ao listar atividade", err);
      
    }
  }

  cadastrar(){

    this.atividadeService.cadastrarAtividade(this.atividade).subscribe(atividade =>{
      this.atividade = new AtividadeModel();
      this.listarAtividade();
    }, err => {
      console.log("erro ao cadastrar atividade", err);
    })
  }

  atualizar(id:Number){
    this.atividadeService.atualizarAtividade(id, this.atividade).subscribe(atividade =>{
      this.atividade = new AtividadeModel();
      this.listarAtividade();
    }, err =>{
      console.log("Erro ao atualizar atividade", err);
    })
  }

}
