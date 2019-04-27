import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./componentes/login/login.component";

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'app',
    loadChildren: './modulos/salas/salas.module#SalasModule'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
