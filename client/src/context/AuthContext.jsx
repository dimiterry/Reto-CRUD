import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response);
            setErrors(error.response.data);
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res);
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }
            setErrors([error.response.data.message])
        }
    };

    const logout = () => {
        Cookies.remove("token");
        setIsAuthenticated(false);
        setUser(null);
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors])

    useEffect(() => {
        async function checkLogin() { //cuando se carga la pagina la cookie tiene el token 
            const cookies = Cookies.get();

            if (!cookies.token) { //comprueba si no hay un token
                setIsAuthenticated(false); // si no hay token no hay autenticacion 
                setLoading(false); // y no esta cargando 
                return setUser(null); //no hay nada 
            }

                try {
                    const res = await verifyTokenRequest(cookies.token); //si hay un token entonces verificalo ya que este se puede establecer manualmente en el navegador
                    if (!res.data) { //si hay token envialo al back y si no hay dato 
                        setIsAuthenticated(false); //no hay autenticacion
                        setLoading(false);// y no esta cargando
                        return;
                    }
                    
                    setIsAuthenticated(true); // si si hay dato entonces el usuario esta 
                    setUser(res.data);
                    setLoading(false);
                } catch (error) { //si dio error termina de cargar y no hay nada
                    setIsAuthenticated(false);
                    setUser(null);
                    setLoading(false);
                }
        }
        checkLogin();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                logout,
                loading,
                user,
                isAuthenticated,
                errors,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};