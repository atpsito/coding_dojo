# Documentacion

## NestJs

Para levantar el backend se necesita entrar en backend-dojo  
dentro del app.module se debe cambiar el puerto el host y la base de datos.

dentro de la carpeta sala en la carpeta adapter modificamos el adaptador 
de redis con el puerto en el que está corriendo el servidor redis 
(para esto se recomienda levantar redis en un contenedor)

Luego de configurar todo eso ejecutamos

```
npm i
```
y tambien
```
npm run start:dev
```

## AngularJS

Para levantar frontend entramos en la carpeta frontend-dojo dentro 
de la carpeta de enviroments vemos que los urls están bien puestas

ejecutamos

```
npm i
```
y tambien
```
ng s
```