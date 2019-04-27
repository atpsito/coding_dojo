import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrearSalaComponent} from "./crear-sala/crear-sala.component";
import {UnirSalaComponent} from "./unir-sala/unir-sala.component";
import {InicioSalaComponent} from "./inicio-sala/inicio-sala.component";
import {SalaChatComponent} from "./sala-chat/sala-chat.component";

const routes: Routes = [
  {
    path:'crear',
    component: CrearSalaComponent
  },
  {
    path:'unir',
    component: UnirSalaComponent
  },
  {
    path:'inicio',
    component: InicioSalaComponent
  },
  {
    path:'chat/:id',
    component: SalaChatComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaRoutingModule { }
