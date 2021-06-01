import { Component, OnInit } from '@angular/core';
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

  constructor(private atividadeService: AtividadesService) { }

  ngOnInit(): void {
    this.listarAtividade();
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
