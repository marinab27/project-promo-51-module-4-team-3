import getConnection from "../db/connection.js";

//funcion para consultar a la BD obtener todos los proyectos (GET)
const getAll = async () => {
  const connection = await getConnection();

  const [results] = await connection.query(
    "SELECT form.*, authors.* FROM form INNER JOIN authors ON form.author_id = authors.id;"
  );

  return results;
};

//funcion para consultar a la BD obtener un proyecto específico (GET)
const getOne = async (id) => {
  const connection = await getConnection();

  const [results] = await connection.query(
    "SELECT form.id AS formID, form.name, form.slogan, form.repo, form.demo, form.technologies, form.description, form.image, author_id, authors.id AS authorID, authors.author, authors.job, authors.photo FROM form INNER JOIN authors ON form.author_id = authors.id WHERE form.id = ?;",
    [id]
  );
  //esta query necesita un id, que hay que dárselo por parámetros y viene desde el controller

  return results;
};

//funcion para consultar a la BD añadir autor
const addAuthor = async (author, job, photo) => {
  const connection = await getConnection();

  const [results] = await connection.query(
    "INSERT INTO authors (author, job, photo) VALUES (?, ?, ?);",
    [author, job, photo]
  );
  //esta query necesita un id, que hay que dárselo por parámetros y viene desde el controller

  return results;
};

//funcion para consultar a la BD añadir proyecto
const addProject = async (
  name,
  slogan,
  repo,
  demo,
  technologies,
  description,
  image,
  author_id
) => {
  const connection = await getConnection();

  const [results] = await connection.query(
    "INSERT INTO form (name, slogan, repo, demo, technologies, description, image, author_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
    [name, slogan, repo, demo, technologies, description, image, author_id]
  );
  //esta query necesita name, slogan, repo, etc, que hay que dárselo por parámetros y viene desde el controller

  return results;
};

export default { getAll, getOne, addAuthor, addProject };
