const express = require('express');
const bodyParser = require('body-parser');

const tarefasRouter = require("./tarefas/TarefaRoute");
const usersRouter = require('./usuarios/UserRouter');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/tarefas', tarefasRouter)
app.use('/users', usersRouter)

app.listen(3000, () => console.log('App running port 3000'))