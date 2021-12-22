import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { InformeComponent } from './informe/informe.component';
import { AgregarComponent } from './agregar/agregar.component';
import { RespuestaUsuarioComponent } from './respuesta-usuario/respuesta-usuario.component';



@NgModule({
  declarations: [
    NavbarComponent,
    DashboardComponent,
    InicioComponent,
    InformeComponent,
    AgregarComponent,
    RespuestaUsuarioComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
    
  ]
})
export class DashboardModule { }
