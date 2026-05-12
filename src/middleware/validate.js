exports.validatePost = (req, res, next) => {
    const { title, author, content } = req.body;
    const errors = [];

    if (!title || title.trim().length < 3) errors.push("Title must be at least 3 characters.");
    if (!author || author.trim().length === 0) errors.push("Author is required.");
    if (!content || content.trim().length < 10) errors.push("Content must be at least 10 characters.");

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Validation Error",
            errors: errors
        });
    }

    next();
};