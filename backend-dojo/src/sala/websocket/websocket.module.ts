import {Module} from "@nestjs/common";
import {SalaGateway} from "./sala.gateway";

@Module({
    imports:[],
    providers:[
        SalaGateway
    ]
})
export class WebsocketModule{}