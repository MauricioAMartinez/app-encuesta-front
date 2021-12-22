import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable } from 'rxjs';
import { Correo } from '../interfaces/correo';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor(private http: HttpClient) {
    
  }
  url = 'http://localhost/app_encuesta_back/public/api/'

  getCorreo():Observable<Correo[]>{
    return this.http.get<Correo[]>(this.url+'listarCorreo')
  }


  reenviarEncuesta(id: number){
    return this.http.get(this.url+'reenviarEncuesta/'+id)
  }

  postCorreo(Correo: Correo):Observable<Correo>{
    return this.http.post<Correo>(this.url+'agregarCorreo',Correo)
  }

 deleteCorreo(Correo: Correo){
  return this.http.delete(this.url+'eliminarCorreo/'+Correo)
}

getAccesoEncuesta(usuario: any){
return this.http.post(this.url+'acceso',usuario)
}

}
