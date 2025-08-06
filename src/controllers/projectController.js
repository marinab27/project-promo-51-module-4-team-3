import projectModel from '../models/projectModel.js'

//funcion para listar todos los proyectos
const listProjects = async (req, res) => {
    
    //pedir datos: lo hace el modelo
    const projectsList = await projectModel.getAll(); 

    //dar respuesta
    res.status(200).json({success: true, results: projectsList})
}

//funcion para listar un proyecto específico
const listOneProject = async (req, res) => {

    const id = req.params.id;//el id se busca aquí
    
    const OneProject = await projectModel.getOne(id);//y se le pasa a la función getOne del modelo

    res.status(200).json({success: true, results: OneProject})
}

export default {listProjects, listOneProject};

