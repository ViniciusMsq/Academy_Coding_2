import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlockLike } from 'typescript';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean =false;
  private usuarioGestor: boolean = false;
  private idUsuario: number;

  mostrarBotaoEmitter = new EventEmitter<boolean>();
  mostrarMenuEmitter = new EventEmitter<boolean>();

  recursos: Array<any> = new Array();

  usuario: Usuario = new Usuario();

  constructor(private router: Router, private http: HttpClient) { 

  }
  listarRecursos(): Observable<any>{
    return this.http.get(`${environment.host}/recursos`);
  }
  
  fazerLogin(usuario:Usuario, recursos:Array<any>){
    for(let i=0; i< recursos.length; i++){
      if(usuario.login == recursos[i].login && usuario.senha == recursos[i].senha){
        this.usuarioAutenticado = true;
        this.idUsuario = recursos[i].id;
        
        if(recursos[i].id_equipe === 1){
          this.mostrarBotaoEmitter.emit(true);
          this.usuarioGestor = true;
        }else{
          this.mostrarBotaoEmitter.emit(false);
          this.usuarioGestor = false;
        }

        this.mostrarMenuEmitter.emit(true);
        console.log(this.usuarioGestor);
        this.router.navigate(['/dashboard', recursos[i].id, recursos[i].descricao]);
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

  usuario_id(){
    return this.idUsuario;
  }
  usuario_gestor(){
    return this.usuarioGestor;
  }
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
