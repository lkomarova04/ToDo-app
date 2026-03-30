import AddTaskForm from "@/features/add-task";
import TodoList from "@/entities/todo/ui/TodoList";
import Header from "@/entities/todo/ui/Header";

const Todo = () => {


  return (
    <>
      <Header/>
      <main>
        <AddTaskForm
        />
        <div className="todo__card">
          <div className="container">
            <TodoList
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Todo;
