require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to DB'))
db.once('open', () => console.log('API running'))
app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

const roomsRouter = require('./routes/rooms')
app.use('/rooms', roomsRouter)

app.listen(3000, () => console.log('Server Started :)'))