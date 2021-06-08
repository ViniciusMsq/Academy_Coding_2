import { Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
//import { RecursosService } from '../cad-recursos/recursos.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { RecursosService } from '../cad-recursos/recursos.service';



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {

  dados: Array<any> = new Array();
  nomes: string[];
  atividades: number[];

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: {
    series: [
      {
        name: "concluidas",
        data: number[]
      }
    ],
    chart: {
      height: 350,
      type: "bar"
    },
    title: {
      text: "Atividades concluidas"
    },
    xaxis: {
      categories: string[]
    }
  };

  constructor(private recursoService:RecursosService, private router: Router) {
    
}

   ngOnChanges(): void{
    

  }
  ngOnInit(): void {
    this.recursoService.listarDadosBarchart().subscribe(dados =>{
      this.dados = dados;
      
      this.nomes = this.dados.map(x => x.nome);
      this.atividades = this.dados.map(x => x.atividades_concluidas);
      
      this.chartOptions = {
        series: [
          {
            name: "concluidas",
            data: this.atividades
          }
        ],
        chart: {
          height: 350,
          type: "bar"
        },
        title: {
          text: "Atividades concluidas"
        },
        xaxis: {
          categories: this.nomes
        }
      };
    }), err => {
      console.log("erro ao listar recursos", err);
    }
  }
}

    /* atualizarGrafico(){
      this.recursoService.listarDadosBarchart().subscribe(dados =>{
      this.dados = dados;
      
      this.nomes = this.dados.map(x => x.nome);
      this.atividades = this.dados.map(x => x.atividades_concluidas);
      
      this.chartOptions.xaxis.categories = this.nomes;
      console.log(this.chartOptions.xaxis.categories);
    }), err => {
      console.log("erro ao listar recursos", err);
    }
  } */

  /* listarDadosbarchart(){
    this.recursoService.listarDadosBarchart().subscribe(dados =>{
      this.dados = dados;
      
      this.nomes = this.dados.map(x => x.nome);
      this.atividades = this.dados.map(x => x.atividades_concluidas);

    }), err => {
      console.log("erro ao listar recursos", err);
    }
  } */


