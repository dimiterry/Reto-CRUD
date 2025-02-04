import Task from '../models/task.model.js'  //despues de creada task.model ahoara se pueden hacer consultas en las siguientes rutas

export const getTasks = async (req, res) => { //busqueda de tareas en la base de datos que pertenecen al usuario logueado
    try {
        const tasks = await Task.find({
            user: req.user.id // con esto solo va a trear las tareas del usuario logueado
        }).populate('user') // trae todos los datos del usuario no solo el id 
        res.json(tasks) //devuelve en formato json las tareas
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const createTask = async (req, res) => { 
    try {
        const { title, description, date } = req.body //extrae los datos de la nueva tarea 

        const newTask = new Task({ //aqui esta disponible para crear la tarea 
            title,
            description,
            date,
            user: req.user.id //asocia la tarea al usuario autenticado
        })
        const saveTask = await newTask.save(); // aqui guarda la tarea
        res.json(saveTask); // aqui responde al cliente que se guado la tarea
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).populate('user'); //es el dato de la url que se busca, la tarea 
        if (!task) return res.status(404).json({ message: "Task not found" }); //si no la encuentra devuelve el status
        res.json(task); //si esta responde con la tarea en formato json
    } catch (error) {
        return res.status(404).json({ message: "Task not found" });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);//encuentra la tarea y la elimina 
        if (!task) return res.status(404).json({ message: "Task not found" });
        return res.sendStatus(204); //la solicitud fue exitosa pero no hay contenido de la respuesta
    } catch (error) {
        return res.status(404).json({ message: "Task not found" });
    }
};

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { // da el nuevo dato
            new: true //devuelve la version actualizada
        });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } catch (error) {
        return res.status(404).json({ message: "Task not found" });
    }
};