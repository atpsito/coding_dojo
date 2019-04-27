import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {Repository} from "typeorm";


@Injectable()
export class UsuarioService{
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>,
    ){}

    async crear(user) {
        const create = await this.usuarioRepository.save(user);
        return create;
    }

    async traerTodos() {
        const findAll = await this.usuarioRepository.find();
        return findAll;
    }

    async traerUno(id){
        const usuario = await this.usuarioRepository.findOne(id)
        return usuario
    }

    async obtenerPorEmail(email: string): Promise<UsuarioEntity> {
        const usuarioEncontrado = await this.usuarioRepository.findOne({
            where: {
                email
            }
        })
        return usuarioEncontrado;
    }

}