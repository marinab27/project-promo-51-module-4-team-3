import express from 'express';
import projectController from '../controllers/projectController.js'

const router = express.Router(); //crea un router basado en express

//defino los endpoints
//router enruta, le digo qué quiero que haga cuando llegue a X ruta
//lo que tiene que hacer viene definido en el controller
//en este caso le estoy diciendo que cuando llegue a /list se vaya a un controller

//obtener todos los proyectos 
router.get('/list', projectController.listProjects);

//obtener un proyecto especifico
router.get('/detail/:id', projectController.listOneProject); 

//añadir un proyecto
//router.post('/add', controller);


export default router;
