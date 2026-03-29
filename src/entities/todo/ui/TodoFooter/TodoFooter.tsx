import ClearCompleteButton from "@/features/clear-button"
import FilterButton from "@/features/filter-task"
import './TodoFooter.css'

interface TodoFooterProps {
    filter: 'all' | 'active' | 'completed';
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
  onDeleteAllButtonClick: () => void,
  done: number
}


const TodoFooter = ({filter, onFilterChange, onDeleteAllButtonClick, done} : TodoFooterProps ) => {
    return (  
    <div className="todo__footer">
            <span className="todo__items_count">{done} items left</span>
            <FilterButton
            filter={filter}
            onFilterChange={onFilterChange}
            />
            <ClearCompleteButton 
            onDeleteAllButtonClick={onDeleteAllButtonClick}
            />
            </div>
    )
}

export default TodoFooter