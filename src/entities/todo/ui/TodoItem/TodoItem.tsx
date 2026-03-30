import { useTasksContext } from '../../model/useTaskContent'
import './TodoItems.css'
import DeleteButton from '@/features/delete-task'

interface TodoItemProps {
  id: string,
  title: string,
  isDone: boolean,
}

const TodoItem= ({id, title, isDone} : TodoItemProps) => {

  const {deleteTask, toggleTask} = useTasksContext()
  const handleDelete = () => {
    deleteTask(id)
  }
    return (
        <li className="todo__items">
              <button id={id} 
              className={`todo__items-btn ${isDone ? 'completed' : ''}`}
              onClick={() => toggleTask(id)}
              >
                {title}
              </button>
              <DeleteButton
              onDelete={handleDelete}
              />
            </li>
    )
}

export default TodoItem;