import app from "./app.js"; //importa Express con los middlewares y rutas
import { connectDB } from "./db.js"; //importa la funcion que conecta la base de datos
import swaggerUI from "swagger-ui-express";
import specs from "./swagger/swagger.js";

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

connectDB() //intenta estables conexion 
app.listen(4000); //escucha el puerto para iniciarlo alli y haya conexion en dicho puerto 
console.log ('Server on port', 4000); //imprime mensaje de que el servidor esta corriendo en el puerto
