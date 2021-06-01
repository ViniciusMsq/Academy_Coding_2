import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EquipeModel } from './equipe.model';

@Injectable({
  providedIn: 'root'
})
export class EquipesService {

  constructor(private http: HttpClient) { }

  listarEquipes() : Observable<any>{
    return this.http.get(`${environment.host}/equipes`);
  }
  cadastrarEquipe(equipe: EquipeModel) : Observable<any>{
    return this.http.post(`${environment.host}/equipes`, equipe);
  }
  atualizarEquipe(id: any, equipe:EquipeModel): Observable<any>{
    return this.http.put(`${environment.host}/equipes/`.concat(id), equipe);
  }
  
 /*  deletarEquipe(id: any): Observable<any>{
    return this.http.delete(`${environment.host}/equipes/`.concat(id));
  } */
}

