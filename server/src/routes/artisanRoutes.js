const express = require('express');
const router = express.Router();
const {
  registerArtisan,
  getAllVerifiedArtisans,
  approveArtisan,
  getOwnArtisanProfile
} = require('../controllers/artisanController');
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

// Register artisan (protected)
router.post('/register', verifyToken, registerArtisan);

// Artisan views their own profile
router.get('/me', verifyToken, getOwnArtisanProfile);

// Public: List of verified artisans
router.get('/verified', getAllVerifiedArtisans);

// Admin: Approve artisan
router.patch('/approve/:id', verifyToken, isAdmin, approveArtisan);

module.exports = router;
