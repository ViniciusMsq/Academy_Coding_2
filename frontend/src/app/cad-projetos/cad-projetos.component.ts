import { Component, OnInit } from '@angular/core';
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

  constructor(private projetoService: ProjetosService) { }

  ngOnInit(): void {
    this.listarProjetos();
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
