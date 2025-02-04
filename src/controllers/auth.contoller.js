import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';
import jwt from 'jsonwebtoken'; //importa el token y se llama en createaccesstoken y lo asocia al id
import { TOKEN_SECRET } from '../config.js';

export const register = async (req, res) => {
    const {email, password, username} = req.body; //va a hacer los datos que el cliente envia 
    //req.body: Extrae los datos del cuerpo de la solicitud
    try {
        const userFound = await User.findOne({ email }); //se verifica si el usuario ya existe
        if (userFound) return res.status(400).json(['the email is already in use']); //retorna mensaje si el usuario ya esta creado

        const passwordHash = await bcrypt.hash(password, 10); // encriptamos la contraseña con caracteres 

        const newUser = new User ({    // se crea un nuevo usuario
            username,
            email,
            password: passwordHash,
        });
        
        const userSaved = await newUser.save(); //guarda el nuevo usuario
        const token = await createAccessToken({id: userSaved._id}); //crea el token 
       
        res.cookie('token', token); //guarda las cookies por la funcionalidad de express, se guarda en una cookie la respuesta
        res.json({                 // me va a responder los datos del usuario
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        }); // va a mostrar nuevo usuario creado con fecha (se modifica para que solo me muestre el user sin el password)
    }   catch (error) {
        res.status(500).json({ message: error.message}); // le responde el tipo de error al cliente con mensaje de error
    } //error generico en el servidor fallo en el codigo o en la base datos
}; //tiene un request y un respond y cuando los llame sale la respuesta

export const login = async (req, res) => {
    const {email, password } = req.body; //va a hacer los datos que el cliente envia 

    try {
        const userFound = await User.findOne({email}); // busca el usuario y mira si hay email y mira si lo encontro o no
        if (!userFound) return res.status(400).json({message: "User not found" }); //si no lo encuentra da mensaje 

        const isMatch = await bcrypt.compare(password, userFound.password); // con la contraseña encriptada compara si esta es igual a la del registro
        if (!isMatch) 
            return res.status(400).json({ message: "Incorrect password"});

        const token = await createAccessToken({id: userFound._id}); //crea el token con el usuario encontrado
       
        res.cookie('token', token); //guarda las cookies por la funcionalidad de express, se guarda en una cookie la respuesta
        res.json({                 // me va a responder los datos del usuario
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        }); // va a mostrar nuevo usuario creado con fecha (se modifica para que solo me muestre el user sin el password)
    }   catch (error) {
        res.status(500).json({ message: error.message}); // le responde el tipo de error al cliente con mensaje de error
    }
};

export const logout = (req, res) => {   //permite resetear el token
    res.cookie('token', "", { 
        expires: new Date(0), //expira el token a una fecha de 0 
    });
    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)

    if(!userFound) return res.status(400).json({ message: "User not found" });

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    });
};

export const verifyToken = async (req, res) => { //verifica si el token enviado en las cookies es valido
    const {token} = req.cookies

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, TOKEN_SECRET, async (err, user) => { // verifica si el token es valido con la clave secreta
        if (err) return res.status(401).json({ message: "Unauthorized"});

       const userFound = await User.findById(user.id) //esi todo es valido busca el usuario
       if(!userFound) return res.status(401).json({ message: "Unauthorized"}); //sino encuentra el usuario manda el status

       return res.json({ // si lo encuentra manda los datos del usuario
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
       });
    });
};