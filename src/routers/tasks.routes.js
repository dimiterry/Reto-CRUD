import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} from "../controllers/tasks.controller.js";

const router = Router() //crea una ruta la cual hace uso del middleware para verificar autenticacion antes de ingresar a tasks

// rutas para requerir las tareas como agregar, eliminar, editar, etc...
router.get('/tasks', authRequired, getTasks);

router.get('/tasks/:id', authRequired, getTask);

router.post('/tasks', authRequired, createTask);

router.delete('/tasks/:id', authRequired, deleteTask);

router.put('/tasks/:id', authRequired, updateTask);

export default router
