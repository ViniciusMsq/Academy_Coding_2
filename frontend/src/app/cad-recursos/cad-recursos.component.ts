import { Component, OnInit } from '@angular/core';
import { EquipesService } from '../cad-equipes/equipes.service';
import { RecursoModel } from './recurso.model';
import { RecursosService } from './recursos.service';

@Component({
  selector: 'app-cad-recursos',
  templateUrl: './cad-recursos.component.html',
  styleUrls: ['./cad-recursos.component.css']
})
export class CadRecursosComponent implements OnInit {

  recursos: Array<any> = new Array();
  recurso: RecursoModel = new RecursoModel();

  equipes: Array<any> = new Array();

  constructor(private recursoService: RecursosService, private equipeService: EquipesService) { }

  ngOnInit(): void {
    this.listarRecursos();
    this.listarEquipes();
  }

  listarEquipes(){
    this.equipeService.listarEquipes().subscribe(equipes =>{
      this.equipes = equipes;
    }), err => {
      console.log("erro ao listar equipes", err);
      
    }
  }
  listarRecursos(){
    this.recursoService.listarRecursos().subscribe(recursos =>{
      this.recursos = recursos;
    }), err => {
      console.log("erro ao listar recursos", err);
    }
  }

  cadastrar(){
    this.recursoService.cadastrarRecursos(this.recurso).subscribe(recurso =>{
      this.recurso = new RecursoModel();
      this.listarRecursos();
    }, err => {
      console.log("erro ao cadastrar recursos", err);
    })
  }

  atualizar(id:Number){
    this.recursoService.atualizarRecursos(id, this.recurso).subscribe(recurso =>{
      this.recurso = new RecursoModel();
      this.listarRecursos();
    }, err =>{
      console.log("Erro ao atualizar recursos", err);
    })
  }
}
