require('dotenv').config()

const knex = require('knex')({
    client: 'pg',
    debug: true,
    connection: {
        connectionString: process.env.DATABASE_URL
    }
})

const tableName = 'users'

exports.findAll = (req, res) => {

    knex.select('id', 'name', 'username').from(tableName)
        .then(users => res.status(200).json(users))
        .catch(err => {
            console.log(err.message)
            res.status(500).json({message: 'Error in loading users'})
        })

}

exports.create = (req, res) => {
    const {name, username, password} = req.body

    knex(tableName).insert({name, username, password}, ['id', 'name', 'username'])
        .then(user => res.status(201).json(user))
        .catch(err => {
            res.status(500).json({message: `Error creating a new user: ${err.message}`})
        })

}

exports.find = (req, res) => {
    const id = req.params.id;
    knex.select('id', 'name').from(tableName)
        .where('id', id)
        .then(user => res.status(200).json(user))
        .catch(err => {
            res.status(500).json({message: `Error loading user: ${err.message}`})
        })
}