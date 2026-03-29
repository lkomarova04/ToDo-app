import closeIcon from '@/assets/img/close-btn.svg';


interface DeleteButtonProps {
    onDelete: () => void
}

const DeleteButton = ({onDelete} : DeleteButtonProps) => {
    return (
        <button className="todo__delete-btn" onClick = {onDelete} aria-label="Удалить задачу">
               <img src={closeIcon} alt="Удалить" 
               /> 
        </button>
    )
}

export default DeleteButton
