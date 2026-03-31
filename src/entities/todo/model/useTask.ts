import { useState, useCallback, useMemo, useEffect } from "react";
import type { FilterType, Task } from "@/entities/todo/model/types/Task";
import taskApi from "@/shared/api/taskAPI";
import type { RootState, AppDispatch } from "@/app/store/store";
import { useSelector, useDispatch } from "react-redux";
import { addTask as addTaskAction, deleteTask as deleteTaskAction, toggleTask as toggleTaskAction, deleteAll as deleteAllTaskAction, setTask } from '@/entities/todo/model/tasksSlice';

const useTasks = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch<AppDispatch>();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data: Task[] = await taskApi.getAll();
        dispatch(setTask(data));
      } catch (err) {
        console.error("Ошибка загрузки с сервера", err);
      }
    };
    fetchTasks();
  }, [dispatch]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === "active") return !task.isDone;
      if (filter === "completed") return task.isDone;
      return true;
    });
  }, [tasks, filter]);

  const addTask = useCallback(async (title: string) => {
    if (!title.trim()) return;
    const newTask: Omit<Task, "id"> = { title, isDone: false };
    try {
      const addedTask: Task = await taskApi.add(newTask);
      dispatch(addTaskAction(addedTask));
      setNewTaskTitle("");
    } catch (err) {
      console.error("Ошибка добавления задачи", err);
    }
  }, [dispatch]);

  const toggleTask = useCallback(async (id: string) => {
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  dispatch(toggleTaskAction(id));

  try {
    await taskApi.toggleComplete(id, !task.isDone);
  } catch (err) {
    console.error("Ошибка toggle задачи", err);
  }
}, [dispatch, tasks]);

  const deleteTask = useCallback(async (id: string) => {
    dispatch(deleteTaskAction(id));
    try {
      await taskApi.delete(id);
    } catch (err) {
      console.error("Ошибка удаления задачи", err);
    }
  }, [dispatch]);

  const deleteAll = useCallback(async () => {
    if (!confirm("Вы уверены, что хотите удалить все задачи?")) return;
    dispatch(deleteAllTaskAction());
    try {
      await taskApi.deleteAll(tasks);
    } catch (err) {
      console.error("Ошибка удаления всех задач", err);
    }
  }, [dispatch, tasks]);

  const activeTasksCount = useMemo(() => tasks.filter((t) => !t.isDone).length, [tasks]);

  return {
    tasks,
    filteredTasks,
    filter,
    setFilter,
    newTaskTitle,
    setNewTaskTitle,
    addTask,
    toggleTask,
    deleteTask,
    deleteAll,
    activeTasksCount,
  };
};

export default useTasks;