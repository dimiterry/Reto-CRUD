
import jwt from 'jsonwebtoken';
import {TOKEN_SECRET} from "../config.js";

// los middlewares son funciones que van a validar antes de que lleguen a una ruta 
export const authRequired = (req, res, next) => { //da informacion de la peticion, da metodos para enviar respuesta, indica que siga ya que hay una operacion despues de esta
    const { token } = req.cookies;
    
    if (!token)
        return res.status(401).json({ message: "No token, authorization denied"});

        jwt.verify(token, TOKEN_SECRET, (err, user) => {
            if (err) return res.status(403).json({ message: "invalid Token"});

            req.user = user

            next();
        })

};