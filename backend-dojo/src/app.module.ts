import { Module } from '@nestjs/common';
import {UsuarioModule} from "./usuario/usuario.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario/usuario.entity";
import {WebsocketModule} from "./sala/websocket/websocket.module";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          useNewUrlParser: true,
          type: 'mongodb',
          host: 'localhost',
          port: 32769,
          database: 'dojo',
          entities: [
            UsuarioEntity
          ],
          synchronize: true,
          dropSchema: false,
      }),
      UsuarioModule,
      WebsocketModule
        ],
  controllers: [],
  providers: [

  ],
})
export class AppModule {}
