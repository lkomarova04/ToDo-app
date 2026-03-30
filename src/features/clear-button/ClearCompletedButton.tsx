import { useTasksContext } from '@/entities/todo/model/useTaskContent'
import './ClearCompleteButton.css'

const ClearCompleteButton = () => {

    const {deleteAll} = useTasksContext()
    return (
        <button className="todo__clear-btn"
        onClick={() => deleteAll()}
        >Clear Complited</button>
    )
}

export default ClearCompleteButton