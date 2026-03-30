import { useState, useEffect, useCallback, useMemo } from "react";
import type { FilterType, Task } from "@/entities/todo/model/types/Task";
import taskApi from "@/shared/api/taskAPI";

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    taskApi.getAll().then(setTasks);
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === "active") return !task.isDone;
      if (filter === "completed") return task.isDone;
      return true;
    });
  }, [tasks, filter]);

  const deleteTask = useCallback((taskId: string) => {
    taskApi.delete(taskId).then(() => {
      setTasks((prev) => prev.filter((task) => task.id !== taskId));
    });
  }, []);

  const toggleTask = useCallback((taskId: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          const newStatus = !task.isDone;
          taskApi.toggleComplete(taskId, newStatus);
          return { ...task, isDone: newStatus };
        }
        return task;
      })
    );
  }, []);

  const addTask = useCallback((title: string) => {
    if (!title.trim()) return;

    const newTask: Omit<Task, "id"> = {
      title,
      isDone: false,
    };

    taskApi.add(newTask).then((addedTask) => {
      setTasks((prev) => [...prev, addedTask]);
      setNewTaskTitle("");
    });
  }, []);

  const deleteAll = useCallback(() => {
    if (confirm("Are you sure you want to delete all?")) {
      setTasks((prev) => {
        taskApi.deleteAll(prev);
        return [];
      });
    }
  }, []);
;

  const activeTasksCount = tasks.filter((task) => !task.isDone).length;

  return {
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
  };
};

export default useTasks;