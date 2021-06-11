import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AtividadeModel } from './atividade.model';

@Injectable({
  providedIn: 'root'
})
export class AtividadesService {

  constructor(private http: HttpClient) { }

  //acessando rotas da API utilizando o http
  //buscando todas as atividades
  listarAtividades() : Observable<any>{
    return this.http.get(`${environment.host}/atividades`);
  }
  //buscando todas as atividades do recurso pelo id do recurso
  listarAtividadesRecurso(id:any) : Observable<any>{
    return this.http.get(`${environment.host}/atividades/`.concat(id));
  }
  //cadastrando atividades no banco
  cadastrarAtividade(atividade: AtividadeModel) : Observable<any>{
    return this.http.post(`${environment.host}/atividades`, atividade);
  }
  //atualizando atividade no banco
  atualizarAtividade(id: any, atividade:AtividadeModel): Observable<any>{
    return this.http.put(`${environment.host}/atividades/`.concat(id), atividade);
  }
  
 /*  deletaratividade(id: any): Observable<any>{
    return this.http.delete(`${environment.host}/atividades/`.concat(id));
  } */
}
