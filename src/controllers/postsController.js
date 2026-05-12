const store = require('../data/store');

// GET all posts
exports.getAllPosts = (req, res) => {
    res.status(200).json({
        success: true,
        count: store.posts.length,
        data: store.posts
    });
};

// GET single post
exports.getPostById = (req, res) => {
    const post = store.posts.find(p => p.id === parseInt(req.params.id));
    
    if (!post) {
        return res.status(404).json({ success: false, message: "Post not found" });
    }
    
    res.status(200).json({ success: true, data: post });
};

// CREATE post
exports.createPost = (req, res) => {
    const { title, author, content } = req.body;
    
    const newPost = {
        id: store.nextId++,
        title,
        author,
        content,
        createdAt: new Date().toISOString()
    };

    store.posts.push(newPost);
    res.status(201).json({ success: true, data: newPost });
};