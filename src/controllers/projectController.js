import projectModel from '../models/projectModel'
//funcion para listar proyectos
const listProjects = async (req, res) => {
    
    //pedir datos: lo hace el modelo
    const projectsList = await projectModel.getAll(); 

    //dar respuesta
    res.json({
        succes: true, list: projectsList
    })


}

module.exports = {listProjects};