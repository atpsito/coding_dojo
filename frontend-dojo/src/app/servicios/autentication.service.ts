import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { ToasterService } from "angular2-toaster";
import { CookieService } from 'ngx-cookie-service'
import {UsuarioInterface} from "../interfaces/usuario.interface";

@Injectable()
export class AutenticacionService{
  estaLogeado = false;
  constructor(private readonly _httpClient:HttpClient,
              private readonly _router:Router,
              private readonly _toaster:ToasterService,
              private readonly _cookieService: CookieService){}

  login(email, password){
    const credenciales = {
      email,
      password
    }
    const respuestaLogin$=this._httpClient.post(environment.url+ environment.port+'/autenticacion/login',credenciales)
    respuestaLogin$.subscribe(
      (usuarioLogueado: UsuarioInterface)=>{
        this.estaLogeado= true;
        this._cookieService.set('user', usuarioLogueado.email)
        this._router.navigate(['/app/inicio']);
      },
      error=>{
        this._toaster.pop('error','Error Login','Correo o contraseña Incorrecta')
      });
  }

}
