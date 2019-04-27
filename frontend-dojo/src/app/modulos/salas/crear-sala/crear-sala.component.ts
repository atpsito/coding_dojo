import { Component, OnInit } from '@angular/core';
import {SalaService} from "../../../servicios/sala.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-sala',
  templateUrl: './crear-sala.component.html',
  styleUrls: ['./crear-sala.component.css']
})
export class CrearSalaComponent implements OnInit {
  idSala;
  constructor(
    private readonly _salaService: SalaService,
    private readonly _router: Router
  ) { }

  ngOnInit() {
   this._salaService.crearSala().subscribe(
     (id)=>{
       this.idSala=id
     }
   )
  }

  irSalaChat(){
    this._router.navigate([`/app/chat/${this.idSala}`])
  }

}
