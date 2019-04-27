import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import {ToasterModule} from "angular2-toaster";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {UsuarioService} from "./servicios/usuario.service";
import {AutenticacionService} from "./servicios/autentication.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CookieService } from 'ngx-cookie-service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToasterModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    UsuarioService,
    AutenticacionService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
