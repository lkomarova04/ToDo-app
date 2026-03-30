 import React from 'react'
 import { memo } from 'react'
 import './AddTaskForm.css'
 import { useTasksContext } from '@/entities/todo/model/useTaskContent'

const AddTaskForm = () => {
  const {addTask, newTaskTitle, setNewTaskTitle} = useTasksContext()
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTask(newTaskTitle)
  }
    return (
        
      <div className="input-card">
        <div className="container">
          <form onSubmit={onSubmit}>
          <input
            type="text"
            id="input-text"
            className="input-text"
            value={newTaskTitle}
            placeholder="Create a new todo..."
            onChange = {(e) => setNewTaskTitle(e.target.value)}
          />
          </form>
        </div>
      </div>
    )
}

export default memo(AddTaskForm)