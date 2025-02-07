import { z } from 'zod';

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         title:
 *           type: string
 *           description: Título de la tarea
 *           example: "Comprar víveres"
 *         description:
 *           type: string
 *           description: Descripción de la tarea
 *           example: "Comprar leche, pan y huevos en el supermercado"
 *         date:
 *           type: string
 *           format: date-time
 *           description: Fecha de la tarea en formato ISO (opcional)
 *           example: "2025-02-06T15:30:00Z"
 *       example:
 *         title: "Comprar víveres"
 *         description: "Comprar leche, pan y huevos en el supermercado"
 *         date: "2025-02-06T15:30:00Z"
 */
export const createTaskSchema = z.object({
    title: z.string({
        required_error: "Title is required"
    }),
    description: z.string({
        required_error: "Description must be a string"
    }),
    date: z.string().datetime().optional()
});
