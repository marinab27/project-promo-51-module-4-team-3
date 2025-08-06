import getConnection from '../db/connection.js';

//obtener todos los proyectos (GET)
const getAll = async () => {
    const connection = await getConnection();

    const [rows] = await connection.query ("SELECT form.*, authors.* FROM form INNER JOIN authors ON form.author_id = authors.id;");

    return rows;
}

//crear un proyecto (POST) 1º se crear el autor y despues el proyecto

//obtener un proyecto específico (GET)
const getOne = async (id) => {
    const connection = await getConnection();
    
    const [rows] = await connection.query ("SELECT form.*, authors.* FROM form INNER JOIN authors ON form.author_id = authors.id WHERE form.id = ?;", [id]);
    //esta query necesita un id, que hay que dárselo por parámetros y viene desde el controller

    return rows;
}
 

export default {getAll, getOne};








