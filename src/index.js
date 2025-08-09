import express from "express";
import cors from "cors";
import projectRoute from "./routes/projectRoute.js"; //importar las rutas
import dotenv from "dotenv";
dotenv.config();

const server = express();
const port = process.env.PORT || 4000;
server.use(
  express.json({
    limit: "50mb",
  })
);

server.set("view engine", "ejs");
server.use(express.json());
server.use(cors());
server.use("/project", projectRoute); //le digo al servidor que use las rutas
const staticServer = "./styles";
server.use(express.static(staticServer));

//escuchar el puerto
server.listen(port, () => {
  console.log(`Servidor escuchando por http://localhost:${port}`);
});

/* server.get("/detail/:id", async (req, res) => {
    const conn = await getConnection();
    let sql = "SELECT authors.*, form.* FROM form INNER JOIN authors ON form.author_id = authors.id WHERE form.id = ?";

    const [result] = await conn.query(sql); 
    await conn.end();

    res.render("showProjects", { data: result }); 
}); */
