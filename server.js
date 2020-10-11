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

// route to check server - don't really need it
app.get('/server', (req, res) => {
    res.send('Server...')
})

app.get('/api/blog', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json({
            posts: posts
        })
    } catch (error) {
        console.log(error)
    }
})

app.post('/api/post', async (req, res) => {
    try {
        await Post.create({
            date: req.body.postDate,
            title: req.body.postTitle,
            text: req.body.postText
        })

        res.json({
            message: 'New post created...'
        })

    } catch (error) {
        res.json({
            message: 'Something went wrong...'
        })
    }

})

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'))

    // Serve React project in production
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})