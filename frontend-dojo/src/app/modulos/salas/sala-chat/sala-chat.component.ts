import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";
import io from 'socket.io-client'
import {ActivatedRoute} from "@angular/router";
import {SalaService} from "../../../servicios/sala.service";

@Component({
  selector: 'app-sala-chat',
  templateUrl: './sala-chat.component.html',
  styleUrls: ['./sala-chat.component.css']
})
export class SalaChatComponent implements OnInit {
  private readonly socketSala = io(environment.url+ environment.socketPort + '/sala')
  idSala
  participantes=[]

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _salaService: SalaService
       ) {
  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(
      parametros=>{
          this.idSala = parametros.get('id')
      }
    )

    this.participantes = this._salaService.traerParticipantes(this.idSala)
 }

}
