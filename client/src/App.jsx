import { BrowserRouter, Routes, Route } from 'react-router-dom'; // react-router-dom permite la navegacion entre paginas
import { AuthProvider } from "./context/AuthContext";

import RegistroPage from './pages/RegistroPage';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';
import TaskFormPage from './pages/TaskFormPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';

import ProtectedRoute from './ProtectedRoute';
import { TaskProvider } from './context/TasksContext';
import Navbar from './components/Navbar';

//app gestiona la navegacion entre paginas 
function App() { //estas son las rutas de las paginas 
  return (
    <AuthProvider> {/*toda la app tenga acceso a los metodos de autenticacion*/}
      <TaskProvider> {/*proporciona el contexto de las tarea*/}
        <BrowserRouter> {/*envuelve la app para permitir la navegacion*/}
          <main className='container mx-auto px-10'>
            <Navbar /> {/*muestra la barra de navegacion*/}
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegistroPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path='/tasks' element={<TasksPage />} />
                <Route path='/add-task' element={<TaskFormPage />} />
                <Route path='/tasks/:id' element={<TaskFormPage />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;