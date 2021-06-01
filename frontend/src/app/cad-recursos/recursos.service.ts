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
  cadastrarRecursos(recurso: RecursoModel) : Observable<any>{
    return this.http.post(`${environment.host}/recursos`, recurso);
  }
  atualizarRecursos(id: any, recurso:RecursoModel): Observable<any>{
    return this.http.put(`${environment.host}/recursos/`.concat(id), recurso);
  }

}
