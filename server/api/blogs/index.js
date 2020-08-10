const express = require('express');
const router = express.Router();
const blogController = require("./blog.controller")

router.get("/", blogController.getBlogs);
router.get("/single", blogController.getCustomBlog);

module.exports = router;