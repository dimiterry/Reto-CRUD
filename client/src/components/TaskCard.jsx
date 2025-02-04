import { useTasks } from "../context/TasksContext"; // Hook para acceder a las tareas en el contexto
import { Link } from "react-router-dom"; // Componente Link para navegación
import dayjs from "dayjs"; // Librería para manejar fechas
import utc from "dayjs/plugin/utc"; // Plugin para trabajar con UTC en dayjs
dayjs.extend(utc); // Extiende dayjs con el plugin utc

// Componente TaskCard para mostrar los detalles de una tarea
function TaskCard({ task }) {
    // Desestructuración para obtener la función deleteTask desde el contexto
    const { deleteTask } = useTasks();

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            {/* Cabecera del card con título y botones */}
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{task.title}</h1>
                <div className="flex gap-x-2 items-center"> 
                    {/* Botón para eliminar la tarea */}
                    <button 
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                        onClick={() => {
                            deleteTask(task._id); // Llama a la función deleteTask para eliminar la tarea
                        }}
                    >
                        delete
                    </button>
                    {/* Link para editar la tarea */}
                    <Link 
                        to={`/tasks/${task._id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    >
                        edit
                    </Link>
                </div>
            </header>
            {/* Descripción de la tarea */}
            <p className="text-slate-300">{task.description}</p>
            {/* Fecha de la tarea formateada en formato UTC */}
            <p>{dayjs(task.date).utc().format("DD/MM/YYYY")}</p>
        </div>
    );
}

export default TaskCard;
