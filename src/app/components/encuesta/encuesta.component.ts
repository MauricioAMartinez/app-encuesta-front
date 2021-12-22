import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RespuestaUsuarioService } from '../../services/respuesta-usuario.service';
import { CookieService } from 'ngx-cookie-service';
import { respuesta } from '../../interfaces/respuesta';



interface calificacion {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  encuesta = true;
  finEncuesta = false;

  calificacion: calificacion[] = [
    { value: '1', viewValue: 'Uno' },
    { value: '2', viewValue: 'Dos' },
    { value: '3', viewValue: 'Tres' },
    { value: '4', viewValue: 'Cuatro' },
    { value: '5', viewValue: 'Cinco' },
  ];


  form: FormGroup;

  constructor(private fb: FormBuilder,
    private respuestaService: RespuestaUsuarioService,
    private cookieService: CookieService) {

    this.form = this.fb.group({
      pregunta1: ['', Validators.required],
      pregunta2: ['', Validators.required],
      pregunta3: ['', Validators.required],
      pregunta4: ['', Validators.required],
      pregunta5: ['', Validators.required],
      pregunta6: ['', Validators.required],
      pregunta7: ['', Validators.required],
      pregunta8: ['', Validators.required],
      pregunta9: ['', Validators.required],
      pregunta10: ['', Validators.required],
      pregunta11: ['', Validators.required],
      pregunta12: ['', Validators.required],
      pregunta13: [''],
      api_token: this.cookieService.get('token_encuesta')
    })
  }

  ngOnInit(): void {

  }

  agregar() {
    console.log(this.form.value)
    this.respuestaService.postRespuesta(this.form.value).subscribe(respuesta => {
      console.log(respuesta)

      this.encuesta = false;
      this.finEncuesta = true;
      this.cookieService.delete('token_encuesta');
    })


  }



}
