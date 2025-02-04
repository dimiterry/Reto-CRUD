import mongoose from "mongoose"; //facilita la conexion mongoDB con Nodejs

export const connectDB = async () => { // se exporta para se usada en otro archivo que la inicializa cuando arranca
    try {
        await mongoose.connect('mongodb://localhost/retodb'); //se establece la conexion con base de datos y usa la URL para acceder a la base de datos
        console.log(">>> DB is connected"); // si se conecta muestra DB is connected: EXITAZO PAPU
    }   catch (error) {
        console.log(error); //si algo sale mal capruta el error y lo muestra 
    }
}