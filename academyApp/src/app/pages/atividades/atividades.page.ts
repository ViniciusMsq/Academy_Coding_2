import { Component, OnInit } from '@angular/core';
import { AtividadeService } from 'src/app/services/atividade.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.page.html',
  styleUrls: ['./atividades.page.scss'],
})
export class AtividadesPage implements OnInit {

  atividades: Array<any> = new Array();
  idUsuario: number;

  constructor(private atividadeService: AtividadeService, private authService:AuthService) { }

  ngOnInit() {
    this.idUsuario = this.authService.usuario_id();
    this.listarAtividadeIdUser();
    
  }
  
  listarAtividadeIdUser(){
    this.atividadeService.listarAtividadesRecurso(this.idUsuario).subscribe(atividades =>{
      this.atividades = atividades;
    }), err => {
      console.log("erro ao listar atividade", err);
      
    }
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
