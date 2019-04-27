import {UsuarioInfoInteface} from "../../interfaces/usuario-info.inteface";
import {UsuarioCrearDto} from "../dto/usuario-crear.dto";

export function generarUsuarioCrear(usuario:UsuarioInfoInteface): UsuarioCrearDto{
    const nuevoUsuario : UsuarioCrearDto = new UsuarioCrearDto()
    nuevoUsuario.UserInfo.nickname = usuario.nickname;
    nuevoUsuario.UserInfo.password = usuario.password;
    nuevoUsuario.UserInfo.email = usuario.email

    return nuevoUsuario
}