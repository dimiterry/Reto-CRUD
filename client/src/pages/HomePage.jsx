import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-800 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Task Manager</h1>
      <p className="text-lg text-gray-300 mb-6">
        Organiza tus tareas de manera eficiente con nuestra plataforma.
      </p>

      {isAuthenticated ? (
        <Link
          to="/add-task"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all"
        >
          Agregar Tarea
        </Link>
      ) : (
        <div className="flex gap-4">
          <Link
            to="/login"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-all"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/register"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg transition-all"
          >
            Registrarse
          </Link>
        </div>
      )}
    </div>
  );
}

export default HomePage;
