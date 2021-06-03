import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../cad-recursos/recursos.service';
import { ProjetoModel } from './projeto.model';
import { ProjetosService } from './projetos.service';

@Component({
  selector: 'app-cad-projetos',
  templateUrl: './cad-projetos.component.html',
  styleUrls: ['./cad-projetos.component.css']
})
export class CadProjetosComponent implements OnInit {

  projetos: Array<any> = new Array();
  projeto: ProjetoModel = new ProjetoModel();

  gestores : Array<any> = new Array();

  constructor(private projetoService: ProjetosService, private recursoService: RecursosService) { }

  ngOnInit(): void {
    this.listarProjetos();
    this.listarGestores();
  }

  listarGestores(){
    this.recursoService.listarGestores().subscribe(gestores =>{
      this.gestores = gestores;
    }), err => {
      console.log("erro ao listar recursos", err);
      
    }
  }

  listarProjetos(){
    this.projetoService.listarProjetos().subscribe(projetos =>{
      this.projetos = projetos;
    }), err => {
      console.log("erro ao listar projetos", err);
      
    }
  }

  cadastrar(){
    this.projetoService.cadastrarProjeto(this.projeto).subscribe(projeto =>{
      this.projeto = new ProjetoModel();
      this.listarProjetos();
    }, err => {
      console.log("erro ao cadastrar projetos", err);
    })
  }

  atualizar(id:Number){
    this.projetoService.atualizarProjeto(id, this.projeto).subscribe(projeto =>{
      this.projeto = new ProjetoModel();
      this.listarProjetos();
    }, err =>{
      console.log("Erro ao atualizar projetos", err);
    })
  }

}
