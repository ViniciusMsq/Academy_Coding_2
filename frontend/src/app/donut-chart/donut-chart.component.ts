import { Component, OnInit } from '@angular/core';
import { AtividadesService } from '../cad-atividades/atividades.service';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

  options = {
    series: [0,0,0,0],
    labels: ['Fazer', 'fazendo', 'pausada', 'concluida'],
    chart: {
      type: 'donut'
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65',
          labels:{
            show:false,
            total: {
              show: false,
              showAlways: false,
              label: 'Total',
              fontSize: '22px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              color: '#373d3f',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b
                }, 0)
              }
            }
          }
          
        }
      }
    }
  }

  atividades: Array<any> = new Array();

  concluidas: number = 0;
  fazer:number = 0;
  fazendo:number = 0;
  pausada:number = 0;

  constructor(private atividadeService: AtividadesService) { }

  ngOnInit(): void {
    this.atividadeService.listarAtividades().subscribe(atividades =>{
      this.atividades = atividades;

      for (let i =0; i<this.atividades.length; i++){
        switch(this.atividades[i].status){
          case 'concluida': this.concluidas++;
          break;
          case 'fazer': this.fazer++;
          break;
          case 'pausada': this.pausada++;
          break;
          case 'fazendo': this.fazendo++;
          break;
        }
      }

      this.options = {
        series: [this.fazer, this.fazendo, this.pausada, this.concluidas],
        labels: ['Fazer', 'fazendo', 'pausada', 'concluida'],
        chart: {
          type: 'donut'
        },
        plotOptions: {
          pie: {
            donut: {
              size: '65',
              labels: {
                show:true,
                total: {
                  show: true,
                  showAlways: false,
                  label: 'Total',
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: '#373d3f',
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0)
                  }
                }
              }
            }
          }
        }
      }

    }), err => {
      console.log("erro ao listar atividade", err);
    }
  }

  listarAtividade(){
    this.atividadeService.listarAtividades().subscribe(atividades =>{
      this.atividades = atividades;
    }), err => {
      console.log("erro ao listar atividade", err);
    }
  }

    /*getConcluidas(){
    this.concluidas = 0;
    console.log(this.atividades[0]);

    for (let i =0; i<this.atividades.length; i++){
      switch(this.atividades[i].status){
        case 'concluida': this.concluidas++;
        break;
        case 'fazer': this.fazer++;
        break;
        case 'pausada': this.pausada++;
        break;
        case 'fazendo': this.fazendo++;
        break;
      }
    }
    console.log(this.concluidas);
    console.log(this.pausada);
    console.log(this.fazendo);
    console.log(this.fazer);

  } */
}
