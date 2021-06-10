import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  constructor(private http: HttpClient) { }


  listaDeAtividades(): Observable<any>{
    return this.http.get(`${environment.url}/atividades`);
  }
  
  listarAtividadesRecurso(id:any) : Observable<any>{
    return this.http.get(`${environment.url}/atividades/`.concat(id));
  }
}
