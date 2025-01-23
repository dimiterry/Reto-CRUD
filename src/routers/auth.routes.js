import { Router } from "express";
import {
 login,
 register,
 logout,
 profile
} from "../controllers/auth.contoller.js"; //estamos llamando desde routers
import { authRequired } from "../middlewares/validateToken.js";

//poder crear peticiones post, get, delete y demas 
const router = Router();

router.post('/register', register);

router.post('/login', login);

router.post('/logout', logout);

router.get('/profile', authRequired, profile);

export default router;