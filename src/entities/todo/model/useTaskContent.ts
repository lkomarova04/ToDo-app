import { useContext } from "react";
import { TasksContext } from "./TaskContext";

export const useTasksContext = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasksContext must be used within TasksProvider");
  }

  return context; 
};