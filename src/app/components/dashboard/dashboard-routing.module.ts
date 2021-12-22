import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InformeComponent } from './informe/informe.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path:'',component: DashboardComponent,children:[
    {path:'inicio',component: InicioComponent},
    {path:'informes',component: InformeComponent},
    
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
