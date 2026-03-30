import type { Task } from "@/entities/todo/model/types/Task"

const URL = 'http://localhost:3001/tasks'

const headers = {
    'Content-Type': 'application/json'
}

const taskApi = {
    getAll: () => {
        return fetch(URL).then((response) => response.json())
    },

    add: (task: {}) => {
        return fetch(URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(task)
        }).then((response) => response.json())
    },

    delete: (id: string) => {
        return fetch(`${URL}/${id}`, {method: 'DELETE'})
    },

    deleteAll: (tasks: Task[]) => {
        return Promise.all(
            tasks.map(({id}) => taskApi.delete(id))
        )
    },

    toggleComplete: (id:string, isDone: boolean) => {
        return fetch(`${URL}/${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({isDone})
        })
    }

}

export default taskApi