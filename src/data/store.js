const store = {
    posts: [
        { 
            id: 1, 
            title: "Vintage Aura", 
            author: "Kimberly", 
            content: "90s aesthetic with high-waisted denim.",
            createdAt: new Date().toISOString()
        }
    ],
    nextId: 2
};

module.exports = store;