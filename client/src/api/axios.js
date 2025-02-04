// Importación de la librería axios
import axios from "axios";

// Creación de una instancia personalizada de axios con configuración
const instance = axios.create({
    // URL base para las solicitudes API
    baseURL: 'http://localhost:4000/api',
    // Permite enviar cookies y credenciales con las solicitudes
    withCredentials: true
});

// Exportación de la instancia configurada para usarla en otras partes del proyecto
export default instance;
