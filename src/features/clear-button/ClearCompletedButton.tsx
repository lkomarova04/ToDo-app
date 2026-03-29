import './ClearCompleteButton.css'

interface ClearCompleteButton{
      onDeleteAllButtonClick: () => void

}
const ClearCompleteButton = ({onDeleteAllButtonClick} : ClearCompleteButton) => {
    return (
        <button className="todo__clear-btn"
        onClick={() => onDeleteAllButtonClick()}
        >Clear Complited</button>
    )
}

export default ClearCompleteButton