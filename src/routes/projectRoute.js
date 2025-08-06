import express from 'express';
import projectController from '../controllers/projectController.js'

const router = express.Router(); //crea un router basado en express

//defino los endpoints
//router enruta, le digo qué quiero que haga cuando llegue a X ruta
//lo que tiene que hacer viene definido en el controller
//en este caso le estoy diciendo que cuando llegue a /list se vaya a un controller
router.get('/list', projectController.listProjects);
//router.post('/add', controller);
//router.get('/detail/:id', controller);

export default router;
