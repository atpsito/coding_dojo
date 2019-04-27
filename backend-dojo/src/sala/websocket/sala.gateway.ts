import {
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway
} from "@nestjs/websockets";
import * as uuid from 'uuid/v4';
import {MensajeUnirSalaInterface} from "../../interfaces/mensaje-unir-sala.interface";
import {throwError} from "rxjs";
import {BadRequestException} from "@nestjs/common";

@WebSocketGateway(3001, {namespace: '/sala'})
export class SalaGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    //salas =[];

    salas = new Map();

    afterInit(server: any) {
        console.log('Inicio el websocket Sala');
    }
    handleConnection(client: any, ...args: any[]) {
        console.log('Se ha establecido una conexion')
    }
    handleDisconnect(client: any) {
        console.log('Desconectado')
    }

    @SubscribeMessage('crear-sala')
    crearSala(socket, email){
        const id = uuid()
        socket.join(id)
        this.salas.set(id, [email])
        return id;
    }

    @SubscribeMessage('unir-sala')
    unirSala(socket, msg: MensajeUnirSalaInterface){
        console.log(msg)
        if(this.salas.has(msg.id)){
            socket.join(msg.id)
            this.salas.get(msg.id).push(msg.email);
            socket.broadcast.to(msg.id).emit('participantes-client', this.salas.get(msg.id))
            return this.salas
        }else{
            throw new BadRequestException('Sala no encontrada')
        }
    }

}