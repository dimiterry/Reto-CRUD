import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <h1>Loading...</h1> //si esta cargando muestra cargando
  if (!loading && !isAuthenticated) return <Navigate to='/login' replace />; // si no esta cargando y no esta autenticado mandalo al login

  return <Outlet />;

}

export default ProtectedRoute;