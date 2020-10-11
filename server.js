const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const Post = require('./models/post')

const app = express()

require('dotenv').config()

const port = process.env.PORT || 5000

// to pass the data from frontend to backend
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ extended: false }))

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log('MongoDB is connected...')
    } catch (error) {
        console.log(error)
    }
}

connectDB()

// routes
app.get('/', (req, res) => {
    res.send('Server...')
})

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'))

    // From Brad's tutorial, unrelated to the whole project
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})