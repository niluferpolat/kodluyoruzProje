const express = require('express');
const { getPosts, createPost, getSinglePost, deletePost, updatePost } = require("../controllers/postController")
const router = express.Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getSinglePost);
router.post("/add_article", createPost);
router.delete("/posts/:id", deletePost);
router.patch("/posts/:id", updatePost)

module.exports = router