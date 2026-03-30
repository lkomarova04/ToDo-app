import { createContext, useMemo } from "react";
import type { ReactNode } from 'react'
import useTask from "./useTask";
import useThemeLocalStorage from "./useThemeLocalStorage";

type TasksContextType = ReturnType<typeof useTask> & {
  toggleTheme: () => void;
};

export const TasksContext = createContext<TasksContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const TasksProvider = ({ children }: Props) => {
  const {
    tasks,
    filter,
    filteredTasks,
    setFilter,
    deleteTask,
    toggleTask,
    addTask,
    deleteAll,
    activeTasksCount,
    newTaskTitle,
    setNewTaskTitle,
  } = useTask();

  const { toggleTheme } = useThemeLocalStorage();

  const value = useMemo(() => ({
    tasks,
        filter,
        filteredTasks,
        setFilter,
        deleteTask,
        toggleTask,
        addTask,
        deleteAll,
        activeTasksCount,
        newTaskTitle,
        setNewTaskTitle,
        toggleTheme,
  }), [
    tasks,
        filter,
        filteredTasks,
        setFilter,
        deleteTask,
        toggleTask,
        addTask,
        deleteAll,
        activeTasksCount,
        newTaskTitle,
        setNewTaskTitle,
        toggleTheme,
  ])

  return (
    <TasksContext.Provider
      value={value}
    >
      {children}
    </TasksContext.Provider>
  );
};