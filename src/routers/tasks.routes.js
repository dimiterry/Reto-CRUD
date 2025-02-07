import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} from "../controllers/tasks.controller.js";
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createTaskSchema } from "../schemas/task.chema.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Endpoints para la gestión de tareas
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Obtiene todas las tareas del usuario autenticado
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida correctamente
 *       401:
 *         description: No token, autorizacion denegada
 */
router.get('/tasks', authRequired, getTasks);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Obtiene una tarea específica por su ID
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea encontrada correctamente
 *       401:
 *         description: No token, autorizacion denegada
 *       404:
 *         description: Tarea no encontrada
 */
router.get('/tasks/:id', authRequired, getTask);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Crea una nueva tarea
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente
 *       401:
 *         description: No token, autorizacion denegada
 */
router.post(
    '/tasks', 
    authRequired, 
    validateSchema(createTaskSchema), 
    createTask
);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Elimina una tarea por su ID
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea a eliminar
 *     responses:
 *       200:
 *         description: Tarea eliminada correctamente
 *       401:
 *          description: No token, autorizacion denegada
 *       404:
 *         description: Tarea no encontrada
 * 
 */
router.delete('/tasks/:id', authRequired, deleteTask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Actualiza una tarea existente
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente
 *       401:
 *          description: No token, autorizacion denegada
 *       404:
 *         description: Tarea no encontrada
 */
router.put('/tasks/:id', authRequired, updateTask);

export default router;
