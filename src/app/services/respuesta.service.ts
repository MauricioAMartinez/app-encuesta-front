import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, shareReplay } from 'rxjs';
import { respuesta } from '../interfaces/respuesta';
@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  constructor(private http: HttpClient) { }
 
  getReport(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(`http://localhost/app_encuesta_back/public/api/exportExcel`,
                                 { headers, responseType: 'blob' as 'json'});
  }
}
