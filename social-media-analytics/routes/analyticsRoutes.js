const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/users', analyticsController.getTopUsers);
router.get('/posts', analyticsController.getTopPosts);

module.exports = router;