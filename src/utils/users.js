const users = []

const addUser = ({ username, id, room }) => {
    //clean data
        username = username.trim().toLowerCase()
        room = room.trim().toLowerCase()

   //validate data
    if(!username || !room){
        return {
            error: 'Username and room required!'
        }
    }

    //search for existing potential name and room

    const existingUser = users.find((user) => {
        return user.username === username && user.room === room
    })
    if(existingUser){
        return {
            error: 'User already exists'
        }
    }

    //store user

    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    //find by index
    const index = users.findIndex((user) =>  user.id === id)

    //validate
    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
   return users.find((user) => user.id === id)
   
}
const getUserInRoom = (room) => {
   return users.filter((user) => user.room === room) 
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}
