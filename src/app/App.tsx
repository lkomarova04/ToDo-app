import Todo from "@/widgets/Todo"
import {TasksProvider} from '@/entities/todo/model/TaskContext'

import './App.css'
import './theme.css'

function App() {
   return (
    <TasksProvider>
    <Todo/>
    </TasksProvider>
   )
}

export default App
