import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "./types/Task";

interface TaskState { 
    tasks: Task[]
}


const initialState: TaskState = {
    tasks: []
}


const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTask: (state, action: PayloadAction<Task[]>) => {
            state.tasks = action.payload;
        }, 
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((item) => item.id !== action.payload)
        },
        deleteAll: (state) => {
            state.tasks = []
        },
        toggleTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.isDone = !task.isDone;
            }
        },
    }
});

export const { addTask, deleteTask, toggleTask, deleteAll, setTask } = tasksSlice.actions;
export default tasksSlice.reducer;