export interface SalaInterface {
    id?: number;
    fechaCreacion?: Date;
    participantes?:[
        {
        nickname: string,
        email: string
        mensaje: string
    }
    ]

}