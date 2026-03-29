import AddTaskForm from "@/features/add-task";
import TodoList from "@/entities/todo/ui/TodoList";
import Header from "@/entities/todo/ui/Header";
import type { FilterType, Task } from "@/entities/todo/model/types/Task";

import { useState, useEffect } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTask = localStorage.getItem('tasks')
    if (savedTask) {
      return JSON.parse(savedTask)
    }    
    
    return [
    { id: "task1", title: "Купить молоко", isDone: false },
  ]
});

  const [theme, setTheme] = useState<'' | 'dark'>(() => {
    return (localStorage.getItem('theme') as '' | 'dark') || ''
  })


  const [newTaskTitle, setNewTaskTitle] = useState("");

  const [filter, setFilter] = useState<FilterType>('all')

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.isDone;
    if (filter === 'completed') return task.isDone;
    return true
  })

  const deleteTask = (taskId: string) => {
    setTasks(
      tasks.filter((task) => task.id !== taskId)
    )
  }

  const toggleTask = (taskId: string) => {
  setTasks(prevTasks =>
    prevTasks.map(task =>
      task.id === taskId ? { ...task, isDone: !task.isDone } : task
    )
  );
};
  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask: Task = {
        id: Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };
      setTasks((prev) => [...prev, newTask]);
      setNewTaskTitle("");
    }
  };
  const deleteAll = () => {
    const isConfirm = confirm("Are you sure you want to delete all?")
    if (isConfirm) {
      setTasks([])
    }
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? '' : 'dark'))
    console.log('Кнопка нажата')
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const activeTask = tasks.filter((task) => !task.isDone).length

  return (
    <>
      <Header 
      toggleTheme = {toggleTheme}
      />
      <main>
        <AddTaskForm
          addTask={addTask}
          newTaskTitle={newTaskTitle}
          setNewTaskTitle={setNewTaskTitle}
        />
        <div className="todo__card">
          <div className="container">
            <TodoList 
            
            tasks={filteredTasks} 
            onDeleteTaskButtonClick = {deleteTask}
            onToggleTaskButtonClick = {toggleTask}
            filter={filter}
            onFilterChange={setFilter}
            onDeleteAllButtonClick={deleteAll}
            done={activeTask}
            
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Todo;
