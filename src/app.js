import express from 'express'; //maneja rutas y peticiones
import morgan from 'morgan'; 
import cookieParser from 'cookie-parser'; //nos permite añadir un middleware, cada que haya una cookie porder convertir a un json
import cors from 'cors' //Permite que el backend acepte peticiones de otros dominios o puertos

import authRoutes from './routers/auth.routes.js'; // se encarga de la rutas seleccionadas con autenticacion
import tasksRouters from './routers/tasks.routes.js'; //maneja las rutas para operaciones crud

const app = express(); //representa el servidor 

app.use(cors({ //esto permite que otro puerto conecte a la base de datos
    origin: 'http://localhost:5173', // esta opcion indica que solo 5173 se puede conectar
    credentials: true //pemite el uso de coockies en las petiicones
}));
app.use(morgan('dev')); //muestra en consola la peticiones 
app.use(express.json()); // se usa para que el back entienda el formato json y reciba el dato
app.use(cookieParser()); //habilita el manejo de coockies en la solicitud

app.use("/api", authRoutes); // usa la ruta creada en auth.routes.js, tambien se pone /api para que las rutas empiecen asi para diferenciarlas con el frontend
app.use("/api", tasksRouters);

export default app;