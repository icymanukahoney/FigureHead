const express = require("express");
const router = express.Router();
const {
    createComment,
    editComment,
    deleteComment,
} = require("../controllers/commentController");

// Create a new comment for a specific product
router.post("/products/:id/comments", createComment);

// Edit an existing product
router.patch("/products/:id/comments/:commentId", editComment);

// Delete a comment
router.delete("/products/:id/comments/:commentId", deleteComment);

module.exports = router;