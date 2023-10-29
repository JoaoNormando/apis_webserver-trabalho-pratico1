const express = require('express')
const tasksRouter = express.Router();

const service = require('./TarefasService');

tasksRouter.get("/", service.findAll)
tasksRouter.get('/:id', service.find)
tasksRouter.post('/', service.create)
tasksRouter.put('/:id', service.update)
tasksRouter.patch('/:id', service.doneTask)
tasksRouter.delete('/:id', service.delete)

module.exports = tasksRouter;