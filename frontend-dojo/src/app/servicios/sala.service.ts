import {Injectable} from "@angular/core";
import io from 'socket.io-client'
import {environment} from "../../environments/environment";
import {from, Observable} from "rxjs";
import {CookieService} from 'ngx-cookie-service';
import {MensajeUnirSalaInterface} from "../../../../backend-dojo/src/interfaces/mensaje-unir-sala.interface";

@Injectable()
export class SalaService{
  private readonly socketSala = io(environment.url+ environment.socketPort + '/sala')

  constructor(
    private readonly _cookieService: CookieService
  ){}


  crearSala(): Observable<any> {
    const email = this._cookieService.get('user')
    const respuesta = new Promise((resolve, reject) => {
      this.socketSala.emit('crear-sala', email, (respuestaSala) => {
        resolve(respuestaSala)
      })
    })

    return from(respuesta)

  }

  unirSala(id):Observable<any>{
    const email = this._cookieService.get('user')
    const msg: MensajeUnirSalaInterface = {
      email,
      id
    }
    const respuesta = new Promise((resolve, reject) => {
      this.socketSala.emit('unir-sala', msg, (respuestaSala) => {
        resolve(respuestaSala)
      })
    })

    return from(respuesta)

  }

  traerParticipantes(id){
    console.log(id)
    let participantes = []
    this.socketSala.on('participantes-client', (respuesta)=>{
       participantes = respuesta
    })
    return participantes
  }

}
