import express from 'express'; 
import cors from 'cors'; 
import projectRoute from './routes/projectRoute'; //importar las rutas
import dotenv from 'dotenv'; 
dotenv.config();

const server = express(); 
const port = 4000; 

server.use(express.json()); 
server.use(cors()); 
server.use('/project', projectRoute);//le digo al servidor que use las rutas
server.set('view engine', 'ejs');//EJS

//escuchar el puerto
server.listen(port, () => {
    console.log(`Servidor escuchando por http://localhost:${port}`);
})


