import './TodoItems.css'
import DeleteButton from '@/features/delete-task'

interface TodoItemProps {
  id: string,
  title: string,
  isDone: boolean,
  onDeleteTaskButtonClick: (taskId: string) => void,
  onToggleTaskButtonClick:(taskId: string, isDone: boolean) => void
}

const TodoItem= ({id, title, isDone, onDeleteTaskButtonClick, onToggleTaskButtonClick} : TodoItemProps) => {
  const handleDelete = () => {
    onDeleteTaskButtonClick(id)
  }
    return (
        <li className="todo__items">
              <button id={id} 
              className={`todo__items-btn ${isDone ? 'completed' : ''}`}
              onClick={() => onToggleTaskButtonClick(id, isDone)}
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