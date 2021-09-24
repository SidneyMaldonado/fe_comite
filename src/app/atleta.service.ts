import { Atleta } from './entities/atleta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  constructor( private _http: HttpClient ) { }

  listar(): Observable<any>{
    return this._http.get<Atleta[]>("http://localhost:8080/atleta/listar/");
  }

}
