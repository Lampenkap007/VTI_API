const express = require('express')
const router = express.Router()
const User = require = require('../models/user')

// Get all
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})
// Get one
router.get('/:id', getUser, (req, res) => {
    res.send(res.user)
})
// Create one
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        connectedRooms: req.body.connectedRooms
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})
// Update one
router.patch('/:id', getUser, async (req, res) => {
    if (req.body.name != null) {
        res.user.name = req.body.name
    }
    if (req.body.email != null) {
        res.user.email = req.body.email
    }
    if (req.body.password != null) {
        res.user.password = req.body.password
    }
    if (req.body.connectedRooms != null) {
        res.user.connectedRooms = req.body.connectedRooms
    }
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})
// Delete one
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({
            message: "User deleted"
        })
    } catch (err) {
        res.status(500).json({
            messsage: err.message
        })
    }
})


// Find one user
async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({
                message: 'Cannot find user'
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }

    res.user = user
    next()
}

module.exports = router