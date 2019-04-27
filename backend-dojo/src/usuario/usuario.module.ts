import { Module } from '@nestjs/common';
import {UsuarioService} from "./usuario.service";
import {UsuarioController} from "./usuario.controller";
import {UsuarioEntity} from "./usuario.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import {AutenticacionController} from "./autentication.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UsuarioEntity
        ])
    ],
    controllers: [
        UsuarioController,
        AutenticacionController
    ],
    providers: [
        UsuarioService,
    ],
})
export class UsuarioModule {}