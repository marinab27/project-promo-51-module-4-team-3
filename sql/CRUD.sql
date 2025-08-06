-- obtener todos los proyectos y su autor correspondiente
SELECT form.*, authors.* 
FROM form
INNER JOIN authors ON form.author_id = authors.id;

-- obtener un proyecto y su autor con un id específico
SELECT form.*, authors.* 
FROM form
INNER JOIN authors ON form.author_id = authors.id
WHERE form.id = 2;