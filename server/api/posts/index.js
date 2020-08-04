const express = require('express');
const router = express.Router();
const postController = require("./post.controller")

router.get("/", postController.getPosts);

module.exports = router;