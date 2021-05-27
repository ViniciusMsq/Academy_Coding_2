import { Component, OnInit } from '@angular/core';
import { EquipeModel } from './equipe.model';
import { EquipesService } from './equipes.service';

@Component({
  selector: 'app-cad-equipes',
  templateUrl: './cad-equipes.component.html',
  styleUrls: ['./cad-equipes.component.css']
})
export class CadEquipesComponent implements OnInit {

  equipes: Array<any> = new Array();
  equipe: EquipeModel = new EquipeModel();

  constructor(private equipeService: EquipesService) { }

  ngOnInit(): void {
    this.listarEquipes();
  }

  listarEquipes(){
    this.equipeService.listarEquipes().subscribe(equipes =>{
      this.equipes = equipes;
    }), err => {
      console.log("erro ao listar equipes", err);
      
    }
  }

  cadastrar(){

    this.equipeService.cadastrarEquipe(this.equipe).subscribe(equipe =>{
      this.equipe = new EquipeModel();
      this.listarEquipes();
    }, err => {
      console.log("erro ao cadastrar equipe", err);
    })
  }

  atualizar(id:Number){
    this.equipeService.atualizarEquipe(id, this.equipe).subscribe(equipe =>{
      this.equipe = new EquipeModel();
      this.listarEquipes();
    }, err =>{
      console.log("Erro ao atualizar equipe", err);
    })
  }
}
