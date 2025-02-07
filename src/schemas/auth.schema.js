import { z } from 'zod';

/**
 * @swagger
 * components:
 *   schemas:
 *     Register:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: Nombre de usuario
 *           example: johndoe
 *         email:
 *           type: string
 *           format: email
 *           description: Correo electrónico válido
 *           example: johndoe@example.com
 *         password:
 *           type: string
 *           description: Contraseña debe tener al menos 6 caracteres
 *           example: password123
 *       example:
 *         username: johndoe
 *         email: johndoe@example.com
 *         password: password123
 */
export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is required',
    }),
    email: z
        .string({
            required_error: 'Email is required',
        })
        .email({
            message: 'Email is not valid',
        }),
    password: z
        .string({
            required_error: 'Password is required',
        })
        .min(6, {
            message: 'Password must be at least 6 characters',
        }),
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: Correo electrónico válido
 *           example: johndoe@example.com
 *         password:
 *           type: string
 *           description: Contraseña debe tener al menos 6 caracteres
 *           example: password123
 *       example:
 *         email: johndoe@example.com
 *         password: password123
 */
export const loginSchema = z.object({
    email: z
        .string({
            required_error: "Email is required",
        })
        .email({
            message: "Email is not valid",
        }),
    password: z
        .string({
            required_error: "Password is required",
        })
        .min(6, {
            message: "Password must be at least 6 characters",
        }),
});
