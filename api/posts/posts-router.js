const express = require('express');

const Post = require('./posts-model');

const router = express.Router();

router.get('/', (req, res) => {
    Post.find()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err => {
            res.status(500).json({ message: "The posts information could not be retrieved"})
        })
})
router.get('/:id', (req, res) => {
    console.log('get post with id from posts router')
})
router.post('/', (req, res) => {
    console.log('add new post from posts router')
})
router.put('/:id', (req, res) => {
    console.log('edit post with id from posts router')
})
router.delete('/:id', (req, res) => {
    console.log('delete post with id from posts router')
})
router.get('/:id/comments', (req, res) => {
    console.log('get all comments from post with id from posts router')
})

module.exports = router;