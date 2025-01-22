import User from '../models/user.model.js '
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
    const {email, password, username} = req.body; //va a hacer los datos que el cliente envia 

    try {

        const passwordHash = await bcrypt.hash(password, 10) // encriptamos la contraseña con caracteres 

        const newUser = new User ({    // se crea un nuevo usuario
            username,
            email,
            password: passwordHash,
        });
        
        const userSaved = await newUser.save() //guarda el nuevo usuario
        const token = await createAccessToken({id: userSaved._id}) //crea el token 
       
        res.cookie('token', token) //guarda las cookies por la funcionalidad de express, se guarda en una cookie la respuesta
        res.json({                 // me va a responder los datos del usuario
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        }) // va a mostrar nuevo usuario creado con fecha (se modifica para que solo me muestre el user sin el password)
    }   catch (error) {
        res.status(500).json({ message: error.message}); // le responde el tipo de error al cliente con mensaje de error
    }
} //tiene un request y un respond y cuando los llame sale la respuesta

export const login = (req, res) => res.send("login") // este va a responder un texto que diga login