import { Router } from "express";
import {
 login,
 register,
 logout,
 profile
} from "../controllers/auth.contoller.js"; //estamos llamando desde routers
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js"; //importo el validate schema 
import { registerSchema, loginSchema } from "../schemas/auth.schema.js"; //importo los schemas
//poder crear peticiones post, get, delete y demas 
const router = Router();

router.post('/register', validateSchema(registerSchema), register); // va a requerir el registro y lo va a validar primero antes de registrar

router.post('/login', validateSchema(loginSchema), login); // antes de loguear valida datos 

router.post('/logout', logout);

router.get('/profile', authRequired, profile);

export default router;