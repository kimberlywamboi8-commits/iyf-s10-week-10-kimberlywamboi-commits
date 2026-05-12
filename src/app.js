const express = require('express');
const postsRoutes = require('./routes/posts');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Global Middleware
app.use(express.json());
app.use(logger);

// Landing Page
app.get('/', (req, res) => {
    res.send(`
        <body style="background: #f4f4f9; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh;">
            <div style="background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h1 style="color: #333;">🚀 Aura Outfit API: Online</h1>
                <p style="color: #666;">Status: <span style="color: green;">● Healthy</span></p>
                <a href="/api/posts" style="display: inline-block; background: #007bff; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none;">View Outfits</a>
            </div>
        </body>
    `);
});

// Route Mounting
app.use('/api/posts', postsRoutes);

// Error Handling (Must be last)
app.use(errorHandler);

module.exports = app;