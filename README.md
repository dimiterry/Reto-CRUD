# 📝 Reto CRUD - Gestor de Tareas con Autenticación

Este es un gestor de tareas desarrollado con **React.js** en el frontend y **Node.js con Express** en el backend.  
La aplicación permite a los usuarios **registrarse, iniciar sesión y cerrar sesión**, gestionando sus tareas de manera segura mediante **tokens de autenticación (JWT)**.  

## 🚀 Tecnologías Usadas  

### Backend (Node.js + Express)  
- **Express** → Framework para el servidor  
- **Mongoose** → ORM para MongoDB  
- **bcryptjs** → Hashing de contraseñas  
- **jsonwebtoken** → Autenticación con JWT  
- **cookie-parser** → Manejo de cookies  
- **cors** → Habilitación de CORS  
- **zod** → Validación de datos  
- **morgan** → Logging de peticiones  
- **nodemon** → Recarga automática en desarrollo  

### Frontend (React.js)  
- **React Router DOM** → Manejo de rutas  
- **React Hook Form** → Manejo de formularios  
- **Axios** → Cliente HTTP para consumir la API  
- **Tailwind CSS** → Estilización  
- **js-cookie** → Manejo de cookies en el frontend  
- **dayjs** → Manejo de fechas  

---

# 📂 Estructura del Proyecto  

___
## ⚙️ Instalación y Configuración  

### 🔧 Requisitos Previos  
Asegúrate de tener instalado:  
- **Node.js** (v22.13.1)  
- **MongoDB** (instalado localmente y en ejecución)  
- **npm** y **nvm**  
- **Vite + React** (build tool para proyectos de frontend moderno)
- **VSCode** (editor de código recomendado)  

---

###  🔹(Node.js + Express)  

1. Clona el repositorio y accede a la carpeta del backend: 
   git clone https://github.com/dimiterry/Reto-CRUD.git
   #### instala las dependencia 
   
   npm install
   
#####    Inicia el backend 

- La ruta para iniciar el backend es en la carpeta Reto-CRUD/
y sigue el comando npm run dev.
El puerto seleccionado para el backend es http://localhost:4000


##### MongoDB

- Usa MongoDB de manera local y si no lo arrancas el windows y lo haces manual abre un terminal cmd y usa el comando (mongod) esto te ayudara a inicializar la base de datos

##### Inicia el frontend 

- la ruta para iniciar el frontend es en la carpeta Reto-CRUD/client
y sigue el comando npm run dev.
El puerto seleccionado para el frontend es http://localhost5173 

#  🚪Endpoints API

### 📌 Autenticación

- POST /api/register → Registro de usuario
- POST /api/login → Iniciar sesión (devuelve JWT)
- POST /api/logout → Cerrar sesión
- GET /api/verify → Obtener datos del usuario autenticado

###📌 Tareas

- GET /api/tasks → Listar tareas (requiere token)
- GET /api/tasks/:id → Obtiene una tarea específica por su ID (requiere token)
- POST /api/tasks → Crear tarea (requiere token)
- PUT /api/tasks/{id} → Actualizar tarea (requiere token)
- DELETE /api/tasks/{id} → Eliminar tarea (requiere token)

### 🔑 Manejo de Autenticación (JWT)

- El token JWT se almacena en cookies en el frontend.
Cada solicitud protegida incluye el encabezado:
Authorization: TOKEN_SECRET
El backend valida el token antes de acceder a las rutas protegidas.

#📌 Formato de peticiones (JSON)
###🔹 Registro de Usuario (POST /api/register)
####📩 Body (JSON)

```
{
  "username": "usuarioEjemplo",
  "email": "usuario@example.com",
  "password": "12345678"
}
```

####📤 Respuesta Exitosa (201 - Created)

```
{
  "message": "Usuario registrado exitosamente",
  "user": {
    "id": "65abc123def456ghi789jkl",
    "username": "usuarioEjemplo",
    "email": "usuario@example.com",
    "createdAt": "2025-02-10T15:30:45.123Z",
    "updatedAt": "2025-02-10T15:30:45.123Z"
  }
}

```
####📛 Errores Posibles

- 400 Bad Request: Datos inválidos o faltantes.

###🔹 Inicio de Sesión (POST /api/auth/login)
####📩 Body (JSON)

```
{
  "email": "usuario@example.com",
  "password": "12345678"
}
```

####📤 Respuesta Exitosa (200 - OK)

```
{
  "message": "Inicio de sesión exitoso",
  "user": {
    "id": "65abc123def456ghi789jkl",
    "username": "usuarioEjemplo",
    "email": "usuario@example.com"
  }
    "createdAt": "2025-02-10T15:30:45.123Z",
    "updatedAt": "2025-02-10T15:30:45.123Z"
}
```
####📛 Errores Posibles

- 400 Bad Request: Datos inválidos o faltantes.
- 401 Unauthorized: Contraseña incorrecta o usuario no registrado.


###🔹 Cerrar Sesión (POST /api/auth/logout)

####📩 Sin Body, solo se envía la petición.

####📤 Respuesta Exitosa (200 - OK)

```
{
  "message": "Ok"
}
```

#Hecho por Jorge Osorno...






