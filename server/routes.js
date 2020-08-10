const express = require('express');
const router = express.Router();

// router.use('/api/posts', require('./api/posts'));
router.use('/api/blogs', require('./api/blogs'));

module.exports = router;