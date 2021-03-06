const express = require("express");
const app = express();
const http = require('http').Server(app)
const axios = require('axios').default
const repo = require('./roomRepo')

// Create and return new room.
app.post('/rooms', async (req, res) => {
    let room = await repo.createRoom()
    res.status(201).send(room)
})

app.get('/rooms/:roomId', async (req, res) => {
    try {
        // Look for room and return.
        let room = await repo.getRoom(req.params.roomId)
        res.status(200).send(room)
    } catch (error) {
        // If no room, return 404.
        res.status(404).send('Room not found.')
    }
})

http.listen("3020", () => {
    console.log("Odin room manager is up!")
})