import TodoItem from "../TodoItem";
import TodoFooter from "../TodoFooter";
import './TodoList.css';
import {memo} from 'react'
import { useTasksContext } from "../../model/useTaskContent";


const TodoList= () => {
  const {tasks, filteredTasks} = useTasksContext()

  return (
    <div className="todo__list">
      <ul className="todo__list-ul">
        {(filteredTasks ?? tasks).map((task) => (
          <TodoItem
            key={task.id}
            {...task}
          />
        ))}
      </ul>
      <TodoFooter 
      />
    </div>
  );
};

export default memo(TodoList);