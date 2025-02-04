import { Router } from "express"; //permite definir rutas
import { //importa las funciones de authContoller
 login,
 register,
 logout,
 profile,
 verifyToken,
} from "../controllers/auth.contoller.js"; 
import { authRequired } from "../middlewares/validateToken.js";// verifica si el usuario esta autenticado 
import { validateSchema } from "../middlewares/validator.middleware.js"; //importo el validate schema 
import { registerSchema, loginSchema } from "../schemas/auth.schema.js"; //importo los schemas
//poder crear peticiones post, get, delete y demas 
const router = Router();

router.post('/register', validateSchema(registerSchema), register); // va a requerir el registro y lo va a validar primero antes de registrar

router.post('/login', validateSchema(loginSchema), login); // antes de loguear valida datos 

router.post('/logout', logout); //llama para borrar el token 

router.get('/verify', verifyToken); //comprobar si el token es valido

router.get('/profile', authRequired, profile);

export default router; //este archivo organiza y proteje las rutas de autenticacion