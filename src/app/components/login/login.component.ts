import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuario: Usuario[] = [];
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private _usuarioService: UsuarioService,
    private cookieService: CookieService,
    private router: Router) {

    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {


  }

  ingresar() {

    const usuario = {
      usuario: this.form.value.usuario,
      password: this.form.value.password
    }

    this._usuarioService.getUser(usuario).subscribe((data: any) => {

      this.usuario = data;

      this.cookieService.set('token_access', data[0].token, 1, '/');

    })

    setTimeout(() => {
      if (Object.keys(this.usuario).length == 0) {
        //mensaje error
        this.error()
        this.form.reset();
      } else {
        //redireccionar
  
        this.fakeLoading();
  
      }
    },400)
  
  }
  error() {
    this.snackBar.open('Usuario o contraseña ingresado son invalidos', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }


  fakeLoading() {
    this.loading = true
    setTimeout(() => {


      this.router.navigate(['dashboard/inicio'])
    }, 1500)

  }
}
