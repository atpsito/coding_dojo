import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inicio-sala',
  templateUrl: './inicio-sala.component.html',
  styleUrls: ['./inicio-sala.component.css']
})
export class InicioSalaComponent implements OnInit {

  constructor(
    private readonly _router: Router
  ) { }

  ngOnInit() {
  }

  irUnirSala(){
    this._router.navigate(['/app/unir'])
  }

  irCrearSala(){
    this._router.navigate(['/app/crear'])
  }


}
