import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearSalaComponent } from './crear-sala/crear-sala.component';
import { UnirSalaComponent } from './unir-sala/unir-sala.component';
import { InicioSalaComponent } from './inicio-sala/inicio-sala.component';
import {SalaRoutingModule} from "./sala-routing.module";
import { SalaChatComponent } from './sala-chat/sala-chat.component';
import {SalaService} from "../../servicios/sala.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CrearSalaComponent,
    UnirSalaComponent,
    InicioSalaComponent,
    SalaChatComponent
  ],
  imports: [
    CommonModule,
    SalaRoutingModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    SalaService
  ]
})
export class SalasModule { }
