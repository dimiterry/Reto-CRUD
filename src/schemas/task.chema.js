import {z} from 'zod';
//valida el formato y exige los campos requeridos
export const createTaskSchema = z.object({
    title: z.string({
        required_error: "Title is required"
    }),
    description: z
    .string({
        required_error: "Description must be a string"
    }),
    date: z.string().datetime().optional()//Esto valida que la cadena que se recibe esté en un formato de fecha y hora válido
});