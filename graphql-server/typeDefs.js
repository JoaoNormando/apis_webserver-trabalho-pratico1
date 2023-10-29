export const typeDefs = `#graphql

    type Message {
        message: String
    }

    type Task {
        id: Int,
        name: String,
        done: Boolean,
        done_date: String,
        id_user: Int
    }
    
    type User {
        id: Int,
        name: String,
        username: String
    }
    
    type TaskDetail {
        id: Int,
        name: String,
        done: Boolean,
        done_date: String,
        user: User
    }
    
    type Query {
        tasks: [Task]
        tasksDone: [Task]
        tasksNotDone: [Task]
        task(id: Int): TaskDetail
        users: [User]
    }

    type Mutation {
        addTask(name: String, id_user: Int): TaskDetail
        doneTask(id: Int): Task
        updateTask(id: Int, name: String, id_user: Int): Task
        deleteTask(id: Int): Message    
    }
    
`