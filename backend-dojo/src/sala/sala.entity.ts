import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity('sala')
export class SalaEntity{
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    identificadorRandom: string;

    @Column()
    fechaCreacion: Date;

    @Column()
    participantes:[
        {
        nickname: string,
        email: string
        mensaje: string
    }
        ];
}