
import jwt from 'jsonwebtoken'; 
import {TOKEN_SECRET} from "../config.js";

// los middlewares son funciones que van a validar antes de que lleguen a una ruta 
export const authRequired = (req, res, next) => { //da informacion de la peticion, da metodos para enviar respuesta, indica que siga ya que hay una operacion despues de esta
    const { token } = req.cookies; //contiene las coockies enviadas por el cliente, se extrae el token del coockie
    
    if (!token) //si no hay token es que el usuario no esta autenticado manda el estado
        return res.status(401).json({ message: "No token, authorization denied"});

        jwt.verify(token, TOKEN_SECRET, (err, user) => { // verifica el token valido 
            if (err) return res.status(403).json({ message: "invalid Token"}); // si no es valido muestra el estado

            req.user = user //si es valido da la informacion al usuario y se guarda

            next(); //dejelo pasar
        })

};