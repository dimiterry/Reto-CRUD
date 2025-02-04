// Importación de la instancia de axios configurada
import axios from "./axios";

// Función para hacer una solicitud POST para registrar un usuario
export const registerRequest = user => axios.post(`/register`, user);

// Función para hacer una solicitud POST para iniciar sesión con el usuario
export const loginRequest = user => axios.post(`/login`, user);

// Función para hacer una solicitud GET para verificar el token de autenticación
export const verifyTokenRequest = () => axios.get('/verify');
