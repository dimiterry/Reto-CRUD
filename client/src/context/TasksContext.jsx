import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("useTasks must be used within a Taskprovider");
    }

    return context;
}

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    const createTask = (task) => {
        console.log("task!")
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}