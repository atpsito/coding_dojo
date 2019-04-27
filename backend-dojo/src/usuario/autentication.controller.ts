import { Controller, Post, Body, BadRequestException, Get } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { UsuarioEntity } from "./usuario.entity";
import { generarUsuarioLogin } from "./funciones/generar-usuario-login";
import {validate} from "class-validator";

@Controller('autenticacion')
export class AutenticacionController {

    constructor(private readonly _usuarioService: UsuarioService) {

    }

    @Post('login')
    async login(
        @Body('email') usuario,
        @Body('password') password,
    ):Promise<UsuarioEntity>{
        const usuarioALogearse = generarUsuarioLogin(usuario, password)
        const arregloErrores = await validate(usuarioALogearse)
        const existenErrores = arregloErrores.length > 0
        if (existenErrores) {
            console.log('errores', arregloErrores)
            throw new BadRequestException('Parametros incorrectos')
        } else {

            const usuarioEncontrado = await this._usuarioService.obtenerPorEmail(usuarioALogearse.email);
            if (usuarioEncontrado) {
                if (usuarioALogearse.password == usuarioEncontrado.password) {
                    return usuarioEncontrado;
                }
                else {
                    throw new BadRequestException('Error en la contraseña')
                }
            }
            else {
                console.error('Intento fallido: No existe el usuario', usuarioALogearse)
                throw new BadRequestException('Error al Login')
            }
        }

        /*    validate(usuarioALogearse).then(errors => { // errors is an array of validation errors
            if (errors.length > 0) {
                console.log("validation failed. errors: ", errors);
            } else {
                    console.log("validation succeed");
            }
        }); */

    }
}
