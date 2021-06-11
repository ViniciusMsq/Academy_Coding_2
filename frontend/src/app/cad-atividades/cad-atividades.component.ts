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

  //criando array para receber dados da api
  atividades: Array<any> = new Array();
  //model para receber dados da pagina
  atividade: AtividadeModel = new AtividadeModel();

  projetos: Array<any> = new Array();
  recursos: Array<any> = new Array();
  constructor(private atividadeService: AtividadesService, private recursoService:RecursosService, private projetoService:ProjetosService) { }
  
  //metodo executado na inicialização
  ngOnInit(): void {
    this.listarAtividade();
    this.listarNaoGestores();
    this.listarProjetos();
  }
  
  //listanddo todas as atividades
  listarAtividade(){
    this.atividadeService.listarAtividades().subscribe(atividades =>{
      this.atividades = atividades;
    }), err => {
      console.log("erro ao listar atividade", err);
      
    }
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


  //cadastro das atividades
  cadastrar(){
    this.atividadeService.cadastrarAtividade(this.atividade).subscribe(atividade =>{
      this.atividade = new AtividadeModel();
      this.listarAtividade();
    }, err => {
      console.log("erro ao cadastrar atividade", err);
    })
  }

  //atualização das atividades
  atualizar(id:Number){
    this.atividadeService.atualizarAtividade(id, this.atividade).subscribe(atividade =>{
      this.atividade = new AtividadeModel();
      this.listarAtividade();
    }, err =>{
      console.log("Erro ao atualizar atividade", err);
    })
  }

}
