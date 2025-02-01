import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { useState, useEffect } from "react";

function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      setTimeout(() => setShouldRedirect(true), 50); // Esperar 50ms antes de redirigir
    }
  }, [loading, isAuthenticated]);

  if (loading) return <h1>Loading...</h1>;
  if (shouldRedirect) return <Navigate to="/login" replace />;

  return <Outlet />;
}

export default ProtectedRoute;
