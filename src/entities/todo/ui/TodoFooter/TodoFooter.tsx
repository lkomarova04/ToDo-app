import ClearCompleteButton from "@/features/clear-button"
import FilterButton from "@/features/filter-task"
import './TodoFooter.css'
import { useTasksContext } from "../../model/useTaskContent"

const TodoFooter = () => {
  const {
     activeTasksCount
    } = useTasksContext()
    return (  
    <div className="todo__footer">
            <span className="todo__items_count">{activeTasksCount} items left</span>
            <FilterButton />
            <ClearCompleteButton />
            </div>
    )
}

export default TodoFooter