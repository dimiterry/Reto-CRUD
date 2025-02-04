import app from "./app.js"; //importa Express con los middlewares y rutas
import { connectDB } from "./db.js"; //importa la funcion que conecta la base de datos

connectDB() //intenta estables conexion 
app.listen(4000); //escucha el puerto para iniciarlo alli y haya conexion en dicho puerto 
console.log ('Server on port', 4000); //imprime mensaje de que el servidor esta corriendo en el puerto
