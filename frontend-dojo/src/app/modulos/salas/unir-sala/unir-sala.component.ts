import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CookieService} from 'ngx-cookie-service';
import {ToasterService} from "angular2-toaster";
import {SalaService} from "../../../servicios/sala.service";

@Component({
  selector: 'app-unir-sala',
  templateUrl: './unir-sala.component.html',
  styleUrls: ['./unir-sala.component.css']
})
export class UnirSalaComponent implements OnInit {
    idSala
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly  _router: Router,
    private readonly _toasterService: ToasterService,
    private readonly _salaService: SalaService

  ) { }

  ngOnInit() {

  }

  irSalaChat(){
    console.log(this.idSala)
    this._salaService.unirSala(this.idSala).subscribe(
      respuesta=>{
        console.log(respuesta)
        this._router.navigate([`/app/chat/${this.idSala}`])
      },
      error=>{
        console.log('Sala Invalida')
        this._toasterService.pop('warning','Sala erronea','Ingrese la sala adecuada')

      }
    )
  }

}
