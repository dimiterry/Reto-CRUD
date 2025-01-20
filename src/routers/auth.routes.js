import { Router } from "express";
import { login, register } from "../controllers/auth.contoller.js"; //estamos llamando desde routers

//poder crear peticiones post, get, delete y demas 
const router = Router()

router.post('/register', register)
router.post('/login', login)

export default router