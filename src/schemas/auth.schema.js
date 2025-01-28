import { z } from 'zod';

export const registerSchema = z.object({ // sirve para validar el registro
    username: z.string({
        required_error: 'Username is required',
    }),
    email: z.
        string({  //pide que el dato introducido sea un email 
            required_error: 'Email is required',
        })
        .email({
            message: 'Invalid email',
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
            message: "Invalid email",
        }),
    password: z
        .string({
            required_error: "Password is required",
        })
        .min(6, {
            message: "Password must be at least 6 characters",
        }),
});