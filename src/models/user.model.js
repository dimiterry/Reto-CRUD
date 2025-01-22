import mongoose from "mongoose";

// indica a mongodb como van a lucir los datos que estamos guardando, le estamos diciendo a la base de datos que cuando guarde esta debe lucir asi
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true // quita los espacios generados de mas y se queda con el contenido del centro
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true // indica que cada email debe ser unico
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true //agrega a la base de datos la fecha de ingreso
})

// se crea un modelo el cual indica como se van a guardar dichos datos en mongodb e interactuar con ellos (pluraliza users)
export default mongoose.model('user', userSchema)