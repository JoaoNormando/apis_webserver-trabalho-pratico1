import fetch from "node-fetch";
import * as dotenv from 'dotenv'

dotenv.config()

const usersUrl = new URL(`${process.env.API_URL}/users`)

const findAll = () => fetch(usersUrl, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
}).then(resp => resp.json())


export {findAll}