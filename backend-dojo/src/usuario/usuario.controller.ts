import {Controller, Post, Body, Get, Query} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioInfoInteface} from "../interfaces/usuario-info.inteface";
import {generarUsuarioCrear} from "./funciones/generar-usuario-crear";


@Controller('usuario')
export class UsuarioController{

    constructor(
        private readonly _usuarioService: UsuarioService
    ){}

    @Post('crear')
    crearUsuario(
        @Body() usuario: UsuarioInfoInteface
    ){
        console.log(usuario)
      const usuarioCreado = this._usuarioService.crear(usuario)
        return usuarioCreado
    }

    @Get('todos')
    traerTodos(){
        const todosUsuarios = this._usuarioService.traerTodos()
        return todosUsuarios
    }

    @Get('obtenerPorEmail')
    obtenerPorEmail(
        @Query('email') email):Promise<any> {
        return this._usuarioService.obtenerPorEmail(email)
    }

}