require('dotenv').config()

const knex = require('knex')({
    client: 'pg',
    debug: true,
    connection: {
        connectionString: process.env.DATABASE_URL
    }
})

const tableName = 'tasks'

exports.findAll = (req, res) => {
    const {done} = req.query
    console.log(done)
    knex.select('*').from(tableName)
        .where(qb => {
            if (done != null) {
                qb.where('done', done)
            }
        })
        .orderBy('id')
        .then(tasks => res.status(200).json(tasks))
        .catch(err => {
            res.status(500).json({message: 'Error in Loading tasks'})
        })
}

exports.create = async (req, res) => {
    const {name, id_user} = req.body;

    const user = await knex.select('id', 'name')
        .from('users')
        .where('id', id_user)
        .first();

    if (!user) {
        return res.status(404).json({message: `User with ID ${id_user} not found`})
    }

    knex(tableName).insert({name, id_user, done: false}, ['id', 'name', 'done'])
        .then(task => res.status(201).json({...task[0], user}))
        .catch(err => res.status(500).json({message: `Error creating a new task: ${err.message}`}))

}

exports.find = (req, res) => {
    const {id} = req.params
    knex.select('tasks.id', 'tasks.name', 'tasks.done', 'tasks.done_date',
            'users.id as userId',
            'users.username as userUsername',
            'users.name as userName').from(tableName)
        .where('tasks.id', id)
        .join('users', 'tasks.id_user', 'users.id')
        .then(task => {
            console.log(task)
            task = task[0]
            const taskObject = {
               id: task.id,
               name: task.name,
               done: task.done,
               done_date: task.done_date,
               user: {
                   id: task.userId,
                   name: task.userName,
                   username: task.userUsername
               }
            }
            res.status(200).json(taskObject)
        })
        .catch(err => res.status(500).json({message: `Error Loading task: ${err.message}`}))
}

exports.doneTask = (req, res) => {
    const {id} = req.params
    knex(tableName).update({done: true, done_date: new Date().toISOString()}, ['id', 'name', 'done', 'done_date'])
        .where('id', id)
        .then(task => res.status(200).json(task[0]))
        .catch(err => res.status(500).json({message: `Error updating Task: ${err.message}`}))
}

exports.update = async (req, res) => {
    const {id} = req.params;
    const {name, id_user} = req.body;


    const user = await knex.select('id', 'name')
        .from('users')
        .where('id', id_user)
        .first();

    if (!user) {
        return res.status(404).json({message: `User with ID ${id_user} not found`})
    }

    knex(tableName).update({name, id_user}, ['id', 'name', "id_user"])
        .where('id', id)
        .then(task => res.status(200).json(task[0]))
        .catch(err => res.status(500).json({message: `Error updating task: ${err.message}`}))

}

exports.delete = (req, res) => {
    const {id} = req.params
    knex(tableName).where('id', id)
        .delete()
        .then(() => res.status(204).json())
}