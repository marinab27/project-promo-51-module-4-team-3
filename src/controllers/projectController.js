import projectModel from '../models/projectModel.js'
//funcion para listar proyectos
const listProjects = async (req, res) => {
    
    //pedir datos: lo hace el modelo
    const projectsList = await projectModel.getAll(); 

    //dar respuesta
    res.json({
        success: true, list: projectsList
    })
}

export default {listProjects};

