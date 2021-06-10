import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: Usuario = new Usuario();
  recursos: Array<any> = new Array();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.listarRecursos();
  }

  listarRecursos(){
    this.authService.listarRecursos().subscribe(recursos => {
      this.recursos = recursos;
    }, err =>{
      console.log("erro ao listar recursos", err);
    })
  }
  

  fazerLogin(){
    this.authService.fazerLogin(this.usuario, this.recursos);
  }
}
