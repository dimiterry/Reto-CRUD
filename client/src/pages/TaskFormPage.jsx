import { useForm } from "react-hook-form"; // Hook para manejar formularios en React
import { useTasks } from "../context/TasksContext"; // Contexto para manejar tareas
import { useNavigate, useParams } from "react-router-dom"; // Hooks para navegación y obtención de parámetros de la URL
import { useEffect } from "react"; // Hook para manejar efectos secundarios

import dayjs from 'dayjs'; // Librería para manejar fechas
import utc from 'dayjs/plugin/utc'; // Extensión para manejar fechas en UTC
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm(); // useForm para manejar los campos del formulario
  const { createTask, getTask, updateTask } = useTasks(); // Funciones del contexto de tareas
  const navigate = useNavigate(); // Hook para navegar entre páginas
  const params = useParams(); // Hook para obtener los parámetros de la URL

  useEffect(() => {
    async function loadTask() {
      if (params.id) { // Si hay un ID en los parámetros, significa que estamos editando una tarea
        const task = await getTask(params.id); // Obtener la tarea por ID
        console.log(task);
        setValue('title', task.title); // Rellenar el campo título con la información de la tarea
        setValue('description', task.description); // Rellenar la descripción
        setValue("date", dayjs.utc(task.date).format("YYYY-MM-DD")); // Formatear la fecha a YYYY-MM-DD
      }
    }
    loadTask(); // Llamamos a la función para cargar la tarea si es necesario
  }, []);

  // Función que se ejecuta al enviar el formulario
  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(), // Si hay fecha, formatearla; si no, usar la actual
    };

    if (params.id) {
      updateTask(params.id, dataValid); // Si hay un ID, actualizar la tarea existente
    } else {
      createTask(dataValid); // Si no hay ID, crear una nueva tarea
    }

    navigate("/tasks"); // Redirigir a la página de tareas después de guardar
  });

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'> {/* Contenedor centrado vertical y horizontalmente */}
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md"> {/* Tarjeta del formulario */}
        <form onSubmit={onSubmit}> {/* Manejo del formulario */}
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title"
            {...register("title")} // Conectar input con useForm
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />

          <label htmlFor="description">Description</label>
          <textarea
            rows="3"
            placeholder="Description"
            {...register("description")} // Conectar textarea con useForm
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />

          <label htmlFor="date">Date</label>
          <input
            type="date"
            {...register('date')} // Conectar input con useForm
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />

          <button className="bg-indigo-500 px-3 py-2 rounded-md">Save</button> {/* Botón para guardar */}
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;