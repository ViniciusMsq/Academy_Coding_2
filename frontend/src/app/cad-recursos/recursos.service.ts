import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecursoModel } from './recurso.model';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private http:HttpClient) { }

  listarRecursos() : Observable<any>{
    return this.http.get(`${environment.host}/recursos`);
  }
  listarGestores() : Observable<any>{
    return this.http.get(`${environment.host}/gestores`);
  }
  listarNaoGestores() : Observable<any>{
    return this.http.get(`${environment.host}/naogestores`);
  }
  cadastrarRecursos(recurso: RecursoModel) : Observable<any>{
    return this.http.post(`${environment.host}/recursos`, recurso);
  }
  atualizarRecursos(id: any, recurso:RecursoModel): Observable<any>{
    return this.http.put(`${environment.host}/recursos/`.concat(id), recurso);
  }
  atualizarRecursosAtividades(id: any,  recurso:RecursoModel): Observable<any>{
    return this.http.put(`${environment.host}/recursosAtividades/`.concat(id), recurso);
  }

  listarDadosBarchart(): Observable<any>{
    return this.http.get(`${environment.host}/barchart`);
  }
}
