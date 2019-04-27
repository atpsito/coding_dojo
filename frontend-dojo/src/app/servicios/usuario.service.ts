import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"

@Injectable()
export class UsuarioService {
  constructor(private readonly _httpClient: HttpClient) { }

  consultarTodosUsuarios(): Observable<Object> {
    return this._httpClient.get(environment.url+ environment.port + '/usuario/obtenerTodos');
  }

  obtenerPorId(id:number):Observable<Object>{
    return this._httpClient.get(environment.url+ environment.port + `/usuario/obtenerPorId/${id}`)
  }

  crearUsuario(usuario):Observable<Object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })}
    return this._httpClient.post(environment.url+ environment.port + '/usuario/crear', usuario, httpOptions);
  }

  consultarUsuarioPorEmail(correo):Observable<Object>{
    return this._httpClient.get(environment.url+ environment.port+`/usuario/obtenerPorEmail?email=${correo}`)
  }

  // buscar(consulta):Observable<Object>{
  //   const parametros=new HttpParams().set('consulta',consulta)
  //   return this._httpClient.get(environment.url+'/usuario/query',{params:parametros})
  // }
}
