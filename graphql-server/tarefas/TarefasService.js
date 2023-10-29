import fetch from "node-fetch";
import * as dotenv from 'dotenv'

dotenv.config()

const tasksUrl = new URL(`${process.env.API_URL}/tarefas`)
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


export {findAll, find}
