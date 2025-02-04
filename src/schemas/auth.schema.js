import { z } from 'zod'; //Este archivo usa la librería Zod para validar los datos que se envían al backend durante el registro y inicio de sesión.
//estos esquemas ayudan a definir y validar los datos la estructura y el formato 
export const registerSchema = z.object({ // sirve para validar el registro
    username: z.string({
        required_error: 'Username is required',
    }),
    email: z.
        string({  //pide que el dato introducido sea un email 
            required_error: 'Email is required',
        })
        .email({
            message: 'Email is not valid',
        }),
    password: z.
        string({
            required_error: 'Password is required',
        })
        .min(6, {
            message: 'Password must be at least 6 characters',
        }),
});

export const loginSchema = z.object({ //sirve para validar el login
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