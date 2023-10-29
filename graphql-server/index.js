import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {typeDefs} from './typeDefs.js'

import {
    findAll as findAllTasks,
    find as findTask,
    create,
    doneTask,
    deleteTask,
    updateTask
} from './tarefas/TarefasService.js'
import {findAll as findAllUsers} from './usuarios/UsuarioService.js'

const resolvers = {
    Query: {
        tasks: () => findAllTasks(),
        tasksDone: () => findAllTasks({done: true}),
        tasksNotDone: () => findAllTasks({done: false}),
        task: (_, {id}) => findTask(id),
        users: () => findAllUsers(),


    },
    Mutation: {
        addTask: (_, {name, id_user}) => create(name, id_user),
        updateTask: (_, {id, name, id_user}) => updateTask(id, name, id_user),
        doneTask: (_, {id}) => doneTask(id),
        deleteTask: (_, {id}) => deleteTask(id)
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const {url} = await startStandaloneServer(server, {
    listen: {port: 5000}
})

console.log(`Graphql server ready at: ${url}`)
