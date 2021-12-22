import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CorreoService } from 'src/app/services/correo.service';

@Component({
  selector: 'app-fake-load',
  templateUrl: './fake-load.component.html',
  styleUrls: ['./fake-load.component.css']
})
export class FakeLoadComponent implements OnInit {

  constructor(private correoService:CorreoService,
              private cookieService:CookieService,
              private router: Router) { }

  usuario ={
    correo : window.location.href.split("/")[4],
    api_token : window.location.href.split("/")[5]
  }

  ngOnInit(): void {
    this.acceso()
  }

  acceso(){
    this.correoService.getAccesoEncuesta(this.usuario).subscribe(respuesta=>{
      if(respuesta == true){
        console.log('Existe')
        this.cookieService.set('token_encuesta',this.usuario.api_token,1);
        setTimeout(() => {
          this.router.navigate(['encuesta'])
        }, 3000);
      }
    })
  }

}
