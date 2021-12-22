import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUser(user:any):Observable<Usuario[]>{
    return this.http.post<Usuario[]>('http://localhost/app_encuesta_back/public/api/login',user)

    
  }

}

