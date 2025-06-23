// server/src/routes/artisanRoutes.js
const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/artisanController');
const verifyToken = require('../middlewares/verifyToken');

router.post('/register', verifyToken, artisanController.registerArtisan);
router.get('/profile/:uid', artisanController.getArtisanProfile);
router.get('/all', artisanController.getAllArtisans);

module.exports = router;
