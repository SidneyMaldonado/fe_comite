import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cidade } from './entities/cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<Cidade[]>("http://localhost:8080/cidade/listar")
  }
}
