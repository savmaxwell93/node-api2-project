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
    const id = req.params.id;
    Post.findById(id)
        .then(post => {
            if (!post) {
                res.status(404).json({ message: "The post with the specified ID does not exist"})
            } else {
                res.status(200).json(post)
            }
        })
        .catch(err => {
            res.status(500).json({ message: "The post information could not be retrieved"})
        })
})
router.post('/', (req, res) => {
    const body = req.body;
    if (!body.title || !body.contents) {
        res.status(400).json({ message: "please provide title and contents for the post"})
    } else {
        Post.insert(body)
            .then(({ id }) => {
                    return Post.findById(id)
            })
            .then(post => {
                res.status(201).json(post)
            })
            .catch(err => {
                res.status(500).json({ message: "There was an error while saving the post to the database"})
            })
    }
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