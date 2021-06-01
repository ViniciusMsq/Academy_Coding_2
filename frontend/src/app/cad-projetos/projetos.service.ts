import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjetoModel } from './projeto.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  constructor(private http: HttpClient) { }

  listarProjetos() : Observable<any>{
    return this.http.get(`${environment.host}/projetos`);
  }
  cadastrarProjeto(projeto: ProjetoModel) : Observable<any>{
    return this.http.post(`${environment.host}/projetos`, projeto);
  }
  atualizarProjeto(id: any, projeto:ProjetoModel): Observable<any>{
    return this.http.put(`${environment.host}/projetos/`.concat(id), projeto);
  }
  
 deletarProjeto(id: any): Observable<any>{
    return this.http.delete(`${environment.host}/projetos/`.concat(id));
  }
}
