import fetch from "node-fetch";
import * as dotenv from 'dotenv'

dotenv.config()

const tasksUrl = new URL(`${process.env.API_URL}/tarefas`)

const create = (name, id_user) => fetch(tasksUrl, {
    method: 'POST',
    body: JSON.stringify({name, id_user}),
    headers: {'Content-Type': 'application/json'}
}).then(resp => resp.json())

const doneTask = (id) => fetch(`${tasksUrl.toJSON()}/${id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'}
}).then(resp => resp.json())

const updateTask = (id, name, id_user) => fetch(`${tasksUrl.toJSON()}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({name, id_user}),
    headers: {'Content-Type': 'application/json'}
}).then(resp => resp.json())

const deleteTask = (id) => fetch(`${tasksUrl.toJSON()}/${id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
}).then(() => ({message: `Task with ID ${id} deleted`}))

const findAll = (queryParams) => {
    if (queryParams?.done != null) {
        tasksUrl.searchParams.set('done', queryParams.done)
    }
    return fetch(tasksUrl, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }).then(response => {
        return response.json()
    })
}

const find = (id) => fetch(`${tasksUrl.toJSON()}/${id}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
}).then(resp => resp.json())


export {findAll, find, create, doneTask, deleteTask, updateTask}
