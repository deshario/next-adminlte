const express = require('express');
const router = express.Router();
const userController = require("./user.controller")

router.get("/", userController.getUsers);
router.get("/limit", userController.getLimitUsers);

module.exports = router;