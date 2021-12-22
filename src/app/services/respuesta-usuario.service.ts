import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { respuesta } from '../interfaces/respuesta';


@Injectable({
  providedIn: 'root'
})
export class RespuestaUsuarioService {

  constructor(private http: HttpClient) { }

  url : string =  'http://localhost/app_encuesta_back/public/api/'
  
  getRespuesta(id:number){
    return this.http.get(this.url+'respuestaUsuario/'+id)
  }

  postRespuesta(usuario:any){
    return this.http.post<respuesta>(this.url+'respuesta',usuario)
  }
}
