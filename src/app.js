import express from 'express'
import morgan from 'morgan'

import authRoutes from './routers/auth.routes.js' 

const app = express();

app.use(morgan('dev'));

app.use(authRoutes); // usa la ruta creada en auth.routes.js

export default app;