const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    text: {
        type: String,
        required: true
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post