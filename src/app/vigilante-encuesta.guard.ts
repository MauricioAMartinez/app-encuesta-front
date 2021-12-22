import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { CorreoService } from './services/correo.service';


@Injectable({
  providedIn: 'root'
})
export class VigilanteEncuestaGuard implements CanActivate {


  constructor(private cookieService:CookieService, 
              private route:Router,
              ){
    
  }


  
  redirect(flag: boolean): any{
    if(!flag){
      this.route.navigate(['encuesta'])
     
    }
  }

  ngOnInit(): void {
 
  }

 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cookie = this.cookieService.check('token_encuesta');
    this.redirect(cookie)
    return cookie;
    return true;
  }
  
}
