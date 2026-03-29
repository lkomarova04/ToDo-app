 import React from 'react'
 import './AddTaskForm.css'


interface AddTaskFormProps {
  addTask: () => void;
  newTaskTitle: string;
  setNewTaskTitle: (title: string) => void
}
const AddTaskForm = ({addTask, newTaskTitle, setNewTaskTitle} : AddTaskFormProps) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTask()
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

export default AddTaskForm