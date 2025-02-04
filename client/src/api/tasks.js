// Importación de la instancia de axios configurada previamente
import axios from "./axios";

// Función para obtener todas las tareas con una solicitud GET
export const getTasksRequest = () => axios.get('/tasks');

// Función para obtener una tarea específica por su ID con una solicitud GET
export const getTaskRequest = (id) => axios.get(`/tasks/${id}`);

// Función para crear una nueva tarea con una solicitud POST
export const createTaskRequest = (task) => axios.post('/tasks', task);

// Función para actualizar una tarea existente usando su ID con una solicitud PUT
export const updateTaskRequest = (id, task) => 
    axios.put(`/tasks/${id}`, task);

// Función para eliminar una tarea usando su ID con una solicitud DELETE
export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`);

