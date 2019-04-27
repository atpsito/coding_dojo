import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";
import {SalaEntity} from "../sala/sala.entity";

@Entity('usuario')
export class UsuarioEntity{
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    nickname: string;

    @Column()
    password: string;

    @Column()
    email:string;

    @Column()
    salasCreadas: SalaEntity[]

    @Column()
    salasUnidas: SalaEntity[]

}