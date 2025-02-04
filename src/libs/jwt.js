import jwt from 'jsonwebtoken' //se importa la libreria que nos permite crear token
import { TOKEN_SECRET } from "../config.js";

export function createAccessToken(payload) { 
    return new Promise ((resolve, reject) => {
        jwt.sign(    //se crea el token
            payload, //es la informacion que queremos guardar en el token 
            TOKEN_SECRET, //esta el llave asociada porar crear un token
            {
                expiresIn: "1d", //el token tiene un dia de duracion 
            },
            (err, token) => { //si hay un error se rechaza la promesa 
                if (err) reject(err) 
                resolve(token) //si no falla resuelve y crea el token 
            }
        );
    })
}