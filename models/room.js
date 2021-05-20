const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    roomName: {
        type: String,
        required: true
    },
    participants: {
        type: Array
    },
    creationDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    messages: {
        type: Array,
        message: {
            type: String,
            required: true
        },
        sentBy: {
            type: String,
            required: true
        },
        sendTime: {
            type: Date,
            required: true,
            default: Date.now()
        }
    }
})

module.exports = mongoose.model('Room', roomSchema)