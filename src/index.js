/* NO OLVIDAR INCLUIR REPO DE GITHUB, MIRAR PACKAGE.JSON Y CAMBIAR LA URL POR LA TUYA */
/* TAMBIEN MODIFICAR EL AUTOR EN EL PACKAGE.JSON */

//CONFIGURAR EL SERVIDOR

//const express = require ('express');  //forma tradicional de importar express, si tenemos "type": "module" en el package.json podemos utilizar el import
import express from 'express'; //forma moderna de importar express
import cors from 'cors'; //importar cors
import mysql from 'mysql2/promise'; //1º importar mysql2 y 2º crear la conexion
import dotenv from 'dotenv'; //importar variables de entorno 
dotenv.config();
import bcrypt from 'bcrypt';//encriptar contraseña
import jwt from 'jsonwebtoken';//verificar token

const server = express(); //crear el servidor
const port = 4000; //crear el puerto

server.use(express.json()); //usar express
server.use(cors()); //usar cors

//escuchar el puerto
server.listen(port, () => {
    console.log(`Servidor escuchando por http://localhost:${port}`);
})

//conexión con la BD (MySQL) es ASÍNCRONA (async/await). aqui es donde incluimos las variables de entorno
const getConnection = async () => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    })
    return connection;
}

// para crear las variables de entorno creamos un archivo .env (¡OJO! siempre debe estar en la raiz del proyecto, NO dentro de src) e incluimos:
/* # variables de entorno  (se obtienen de mysql workbench o aiven)
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=

# generar y verificar token con jwt
JWT_SECRET_KEY= */


//ENDPOINTS (get, post, put, delete)
server.metodoQueSea("url", async (req, res) => {

    // 1º iniciar conexion
    // 2º query (probar en mysql workbench para ver si la query devuelve lo que necesitas)
    // 3º finalizar conexion
    // 4º respuesta

    //probar endpoint: todos se pueden probar en postman, pero el tipo get es el unico que tambien se puede probar en navegador

})

