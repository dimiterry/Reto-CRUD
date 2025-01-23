import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router() //crea una ruta la cual hace uso del middleware para verificar autenticacion antes de ingresar a tasks

router.get('/tasks', authRequired, (req, res) => res.send('tasks'))

export default router
