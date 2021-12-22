import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { VigilanteGuard } from './vigilante.guard';
import { VigilanteEncuestaGuard } from './vigilante-encuesta.guard';
import { FakeLoadComponent } from './components/fake-load/fake-load.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login',component: LoginComponent},
  {path:'loading/:correo/:token',component: FakeLoadComponent},
  {path:'encuesta',component: EncuestaComponent,
  canActivate: [VigilanteEncuestaGuard]},
  {path: 'dashboard', loadChildren: () => import ('./components/dashboard/dashboard.module').then(x => x.DashboardModule),
   canActivate: [VigilanteGuard] },
  {path:'**',redirectTo: 'login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
