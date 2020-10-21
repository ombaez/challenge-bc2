## INICIO

Instala las dependecias de las carpetas corriendo el comando "npm i"

- root del proyecto ( es el servidor de la app ) y /client

Crea una base de datos con psql llamada "challenge"

- Abri el terminal
- Tipea el comando "psql"
- Dentro de la CLI de psql, tipea "create database challenge;", deberia devolverte "CREATE DATABASE" para confirmar la operacion.

En la carpeta root, corre el comando "npm run dev" para ejecutar ambos servicios cliente + servidor.

Cliente = ## PUERTO 3000
Servidor = ## PUERTO 8080

## BACKEND

GET - "/bulk/create" - Crear varios pasajeros en la tabla passengers
GET - "/bulk"/delete" - Elimina todos los registros de todas las tablas

POST - "/passengers/checkout/:passengerId" - Retira los equipajes de un pasajero
POST - "/passengers/" - Crea pasajeros
GET - "/passengers/" - Devuelve todos los pasajeros

GET - "/packages/with-package" - Devuelve pasajeros con equipaje
GET - "/packages/:passengerId" - Devuelve datos de equipaje
GET - "/packages/" Devuelve todos los equipajes
POST - "/packages/" Crea un nuevo equipaje ( el pasajero_id var por el body)

## FRONTEND

Cada funcionalidad esta aclarada en el titulo de la navbar del FE
