const express = require('express')
const usersRouter = express.Router();

const service = require('./UserService');

usersRouter.get("/", service.findAll)
usersRouter.post('/', service.create)
usersRouter.get('/:id', service.find)

module.exports = usersRouter;
