import projectModel from "../models/projectModel.js";

//funcion para listar todos los proyectos
const listProjects = async (req, res) => {
  //pedir datos: lo hace el modelo
  const projectsList = await projectModel.getAll();

  //dar respuesta
  res.status(200).json({ success: true, results: projectsList });
};

//funcion para listar un proyecto específico
const listOneProject = async (req, res) => {
  const id = req.params.id; //el id se busca aquí

  const oneProject = await projectModel.getOne(id); //y se le pasa a la función getOne del modelo

  if (oneProject.length === 0) {
    res.status(404).json({
      success: false,
      mensaje: "⚠️El ID no coincide con ninguna frase",
    });
  } else {
    console.log(oneProject);
    res.render("showProjects", { oneProject: oneProject[0] });
  }
};

//funcion para añadir autor y proyecto AL MISMO TIEMPO
//crear autor --> obtener id autor --> crear proyecto vinculado al id del autor --> devolver datos
const addAuthorAndProject = async (req, res) => {
  const {
    author,
    job,
    photo,
    name,
    slogan,
    repo,
    demo,
    technologies,
    desc,
    image,
  } = req.body; //viajan por el body //OJO: no puedo enviar el id por el body ya que no existe aun y lo voy a crear a la vez que creo el autor

  if (
    !author ||
    !job ||
    !photo ||
    !name ||
    !slogan ||
    !repo ||
    !demo ||
    !technologies ||
    !desc ||
    !image /* || !author_id */
  ) {
    res.status(400).json({
      success: false,
      mensaje: "⚠️Faltan campos obligatorios",
    });
  }

  //1. añadir un autor

  const newAuthor = await projectModel.addAuthor(author, job, photo); //y se le pasa a la función addAuthor del modelo

  const author_id = newAuthor.insertId; //me quedo con el id y es lo que tengo que unir con el proyecto

  //2. añadir proyecto

  const newProject = await projectModel.addProject(
    name,
    slogan,
    repo,
    demo,
    technologies,
    desc,
    image,
    author_id
  ); //y se le pasa a la función addProject del modelo

  res.status(200).json({
    success: true,
    mensaje: "✅Autor y proyecto añadidos correctamente",
    author_id,
    project_id: newProject.insertId,
  });
};

export default { listProjects, listOneProject, addAuthorAndProject };
