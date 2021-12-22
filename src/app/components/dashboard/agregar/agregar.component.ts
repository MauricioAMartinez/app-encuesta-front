import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CorreoService } from 'src/app/services/correo.service';
import { NavbarComponent } from '../navbar/navbar.component';
import {ErrorStateMatcher} from '@angular/material/core';
import { PuenteService } from '../../../services/puente.service';
import { Correo } from 'src/app/interfaces/correo';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  constructor(){

  }
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  loading = false;
  formulario = true;
  listarCorreos: Correo[] = [];

  form : FormGroup;
  constructor(private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private _correoService: CorreoService,
    private dialogRef: MatDialogRef<NavbarComponent>,
    private puente : PuenteService,
    private CorreoService: CorreoService

  ) { 
    this.form = this.fb.group({
      correo: ['',Validators.required],
      plantilla: ['',Validators.required],
    })
  }


  ngOnInit(): void {
  }



  //Agregar usuario
  agregar(){
    //Declarar objeto a enviar
    const nuevoCorreo ={
      correo: this.form.value.correo,
      plantilla: this.form.value.plantilla
    } 
    //llamar service
    this._correoService.postCorreo(nuevoCorreo).subscribe((data) => {
      //Efecto de carga
      this.loading = true;
      this.formulario = false;
     
      setTimeout(() => {
        //Notificacion despues de 1.5ss
        this.snackBar.open('Correo Agregado con exito','',{
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        })
      //Cierro el dialogo despues de 1.5ss
      this.CorreoService.getCorreo().subscribe(correos => {
        this.puente.disparadorPuente.emit({
          data: this.listarCorreos = correos
        })
      })
      this.dialogRef.close();
      }, 1500);
      
      //Si el correo existe o hay algun error alerta
    },error =>{
      this.snackBar.open('Correo no valido o en existencia','',{
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    });
    
    
  }
  //cerrar el dialog
   onNoClick(): void {
    this.dialogRef.close();
  }


}
