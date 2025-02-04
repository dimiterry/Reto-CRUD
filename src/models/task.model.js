import mongoose from "mongoose"; //se importa moongoose para interactuar con mongoDB

const taskSchema = new mongoose.Schema({ //crea un esquema que define la estructura de los documentos en la colección tasks
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: { // el usuario es un id de mongo db y este referencia a otro modelo
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true, //asegura que la tarea sea del un usuario
    }

},  {
        timestamps: true,
});


export default mongoose.model("Task", taskSchema);