import { Injectable, Output ,EventEmitter} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PuenteService {
  @Output() disparadorPuente: EventEmitter<any> = new EventEmitter();
  @Output() disparadorRespuesta: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
