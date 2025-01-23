import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: { // el usuario es un id de mongo db y este referencia a otro modelo
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }

},  {
        timestamps: true,
});


export default mongoose.model("Task", taskSchema);