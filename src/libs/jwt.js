import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../config.js";

export function createAccessToken(payload) {
    return new Promise ((resolve, reject) => {
        jwt.sign(    //se crea el token
            payload,
            TOKEN_SECRET, //esta el llave asociada porar crear un token
            {
                expiresIn: "1d",
            },
            (err, token) => {
                if (err) reject(err)
                resolve(token)
            }
        );
    })
}