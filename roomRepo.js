const axios = require('axios')

const roomRepoUrl = process.env.ROOM_REPOSITORY_URL
const socketUrl = process.env.SOCKET_SERVER_URL

module.exports = {
    createRoom: async function () {

        // Create a new room to be posted.
        data = {
            name: 'Odin-based Room',
            socketUrl: socketUrl,
            signallingUrl: socketUrl
        }
        
        // Post said room and return it.
        return (await axios.post(roomRepoUrl + '/rooms', data)).data
    },

    getRoom: async function (roomId) {
        return (await axios.get(roomRepoUrl + '/rooms/' + roomId)).data
    }
}