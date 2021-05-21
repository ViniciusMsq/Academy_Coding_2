import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BlockLike } from 'typescript';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean =false;
  private usuarioGestor: boolean = false;

  mostrarBotaoEmitter = new EventEmitter<boolean>();
  mostrarMenuEmitter = new EventEmitter<boolean>();

  recursos: Array<any> = new Array();

  usuario: Usuario = new Usuario();

  constructor(private router: Router, private http: HttpClient) { 

  }
  listarRecursos(): Observable<any>{
    return this.http.get("http://127.0.0.1:8000/api/recursos");
  }
  fazerLogin(usuario:Usuario, recursos:Array<any>){
    for(let i=0; i< recursos.length; i++){
      if(usuario.login == recursos[i].login && usuario.senha == recursos[i].senha){
        this.usuarioAutenticado = true;
        
        if(recursos[i].id_equipe === 1){
          this.mostrarBotaoEmitter.emit(true);
          this.usuarioGestor = true;
        }else{
          this.mostrarBotaoEmitter.emit(false);
          this.usuarioGestor = false;
        }

        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/dashboard', recursos[i].id]);
        break;
      }else{
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
      }
    }

    /*if(usuario.login === recursos[this.indice].login && usuario.senha === recursos[this.indice].senha){
      this.usuarioAutenticado = true;
      
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
      
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }*/
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
