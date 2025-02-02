import Task from '../models/task.model.js'  //despues de creada task.model ahoara se pueden hacer consultas en las siguientes rutas

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({
            user: req.user.id // con esto solo va a trear las tareas del usuario logueado
        }).populate('user') // trae todos los datos del usuario no solo el id 
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const createTask = async (req, res) => {
    try {
        const { title, description, date } = req.body

        const newTask = new Task({ //aqui esta disponible para crear la tarea 
            title,
            description,
            date,
            user: req.user.id
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
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } catch (error) {
        return res.status(404).json({ message: "Task not found" });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);//encuentra la tarea y la elimina 
        if (!task) return res.status(404).json({ message: "Task not found" });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "Task not found" });
    }
};

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { // da el nuevo dato
            new: true
        });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } catch (error) {
        return res.status(404).json({ message: "Task not found" });
    }
};