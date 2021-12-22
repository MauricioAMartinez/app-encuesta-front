import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/dashboard/inicio/inicio.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { CookieService } from 'ngx-cookie-service';
import { FakeLoadComponent } from './components/fake-load/fake-load.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncuestaComponent,
    FakeLoadComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
