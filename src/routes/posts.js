// src/routes/posts.js
const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const { validatePost } = require('../middleware/validate'); // Import your new middleware

// GET routes don't need validation usually
router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getPostById);

// POST route uses the validation middleware BEFORE the controller
router.post('/', validatePost, postsController.createPost);

module.exports = router;