const express = require('express')
const router = express.Router()
const Room = require = require('../models/room')

// Get all
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find()
        res.json(rooms)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})
// Get one
router.get('/:id', getRoom, (req, res) => {
    res.send(res.room)
})
// Create one
router.post('/', async (req, res) => {
    const room = new Room({
        roomName: req.body.roomName,

    })
    try {
        const newRoom = await room.save()
        res.status(201).json(newRoom)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})
// Update one
router.patch('/:id', getRoom, async (req, res) => {
    if (req.body.roomName != null) {
        res.room.roomName = req.body.roomName
    }
    if (req.body.participants != null) {
        res.room.participants = req.body.participants
    }
    if (req.body.messages != null) {
        res.room.messages = req.body.messages
    }
    try {
        const updatedRoom = await res.room.save()
        res.json(updatedRoom)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

router.put('/:id', getRoom, async (req, res) => {
    if (req.body.messages != null) {
        res.room.messages.push(req.body.messages)
    }
    try {
        const updatedRoom = await res.room.save()
        res.json(updatedRoom)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

// Delete one
router.delete('/:id', getRoom, async (req, res) => {
    try {
        await res.room.remove()
        res.json({
            message: "Room deleted"
        })
    } catch (err) {
        res.status(500).json({
            messsage: err.message
        })
    }
})

async function getRoom(req, res, next) {
    let room
    try {
        room = await Room.findById(req.params.id)
        if (room == null) {
            return res.status(404).json({
                message: 'Cannot find room'
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }

    res.room = room
    next()
}

module.exports = router