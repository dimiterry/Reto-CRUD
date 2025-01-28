import { BrowserRouter, Routes, Route } from 'react-router-dom'; // react-router-dom permite la navegacion entre paginas

import RegistroPage from './pages/RegistroPage';
import LoginPage from './pages/LoginPage';

function App() { //estas son las rutas de las paginas 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegistroPage />} />
        <Route path='/tasks' element={<h1>Tasks page</h1>} />
        <Route path='/add-task' element={<h1>new task</h1>} />
        <Route path='/tasks/:id' element={<h1>update page</h1>} />
        <Route path='/profile' element={<h1>profile</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App