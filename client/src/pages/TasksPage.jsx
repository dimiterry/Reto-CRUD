import { useEffect } from "react"; // Hook de React para ejecutar efectos secundarios
import { useTasks } from "../context/TasksContext"; // Importamos el contexto de tareas
import TaskCard from "../components/TaskCard"; // Componente para mostrar cada tarea

function TasksPage() {
  // Extraemos las funciones y datos del contexto de tareas
  const { getTasks, tasks } = useTasks();

  // useEffect ejecuta getTasks() cuando la página se monta
  useEffect(() => {
    getTasks(); // Obtiene las tareas desde la API o base de datos
  }, []); // Se ejecuta solo una vez al montar el componente

  // Si no hay tareas, mostramos un mensaje y detenemos el renderizado
  if (tasks.length == 0) return (<h1>No tasks</h1>);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {/* Recorremos el array de tareas y renderizamos cada una en un TaskCard */}
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
}

export default TasksPage; // Exportamos el componente para su uso en la app