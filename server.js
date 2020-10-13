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
        console.log('MongoDB is connected')
    } catch (error) {
        console.log(error)
    }
}

connectDB()

// GET request `posts` contains all the data
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

// POST request -> create new post
app.post('/api/post', async (req, res) => {
    try {
        await Post.create({
            date: req.body.postDate,
            title: req.body.postTitle,
            text: req.body.postText
        })

        // this is used in newPost.js
        res.json({
            message: 'New post created...'
        })

    } catch (error) {
        res.json({
            message: 'Something went wrong...'
        })
    } 

})

// DELETE request
app.delete('/api/blog/:id', (req, res) => {

    const id = req.params.id

    Post.findByIdAndDelete(id)
        .then(result => {
            console.log(`deleted post`)
        })
        .catch(error => console.log(error))

})

// check how message is passed back in POST request



// serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'))

    // serve React project in production
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})