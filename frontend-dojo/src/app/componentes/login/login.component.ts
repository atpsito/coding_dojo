import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {debounceTime, map} from "rxjs/operators";
import {UsuarioService} from "../../servicios/usuario.service";
import {AutenticacionService} from "../../servicios/autentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
  private _mensajesValidacion = {
    required: 'Este campo es requerido',
    email: 'Este campo debe ser un mail'
  }
  constructor(
            private readonly _autenticacionService: AutenticacionService,
              private readonly _formBuilder: FormBuilder,
              private readonly _usuarioService: UsuarioService,
              private readonly _router:Router) { }

  ngOnInit(): void {
    this.formularioLogin = this._formBuilder.group({
      emailLogin: ['', [Validators.required, Validators.email], this.validacionAsincrona.bind(this)],
      passwordLogin: ['', [Validators.required]]
    })

    this.formularioLogin.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(cb => {
    })
  }
  login() {
    this._autenticacionService.login(
      this.formularioLogin.get('emailLogin').value,
      this.formularioLogin.get('passwordLogin').value);

  }
  escucharInputEmail() {
    const emailFormControl = this.formularioLogin.get('emailLogin')
    emailFormControl
      .valueChanges
      .subscribe(valorNombre => {
        this.setearMensajesEmail(emailFormControl)
      })
  }

  setearMensajesEmail(inputMail: AbstractControl) {

  }


  validacionAsincrona(valorInput: AbstractControl) {
    return this._usuarioService
      .consultarUsuarioPorEmail(valorInput.value)
      .pipe(
        map(valor => {
          if (valor)
            return null
          else
            return { miError: true }
        })
      )

  }


}
