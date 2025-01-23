import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'; //nos permite añadir un middleware cada que haya una cookie porder convertir a un json

import authRoutes from './routers/auth.routes.js';
import tasksRouters from './routers/tasks.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json()); // se usa para que el back entienda el formato json y reciba el dato
app.use(cookieParser());

app.use("/api", authRoutes); // usa la ruta creada en auth.routes.js, tambien se pone /api para que las rutas empiecen asi para diferenciarlas con el frontend
app.use("/api", tasksRouters);

export default app;