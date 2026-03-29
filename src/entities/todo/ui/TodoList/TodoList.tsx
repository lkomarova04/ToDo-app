import TodoItem from "../TodoItem";
import TodoFooter from "../TodoFooter";
import './TodoList.css';
import type { Task } from '@/entities/todo/model/types/Task';

interface TodoListProps {
  tasks: Task[];
  onDeleteTaskButtonClick: (taskId: string) => void;
  onToggleTaskButtonClick: (taskId: string, isDone: boolean) => void;
  filter: 'all' | 'active' | 'completed'
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
  onDeleteAllButtonClick: () => void,
  done: number
}

const TodoList= (
  { tasks,
    onDeleteTaskButtonClick,
    onToggleTaskButtonClick, 
    filter,
    onFilterChange,
    onDeleteAllButtonClick,
    done
  } : TodoListProps) => {
  return (
    <div className="todo__list">
      <ul className="todo__list-ul">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            onDeleteTaskButtonClick = {onDeleteTaskButtonClick}
            onToggleTaskButtonClick = {onToggleTaskButtonClick}
            {...task}
          />
        ))}
      </ul>
      <TodoFooter 
      filter={filter}
      onFilterChange={onFilterChange}
      onDeleteAllButtonClick={onDeleteAllButtonClick}
      done={done}

      />
    </div>
  );
};

export default TodoList;