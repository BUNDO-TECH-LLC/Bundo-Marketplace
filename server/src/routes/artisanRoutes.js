const express = require('express');
const router = express.Router();
const {
  registerArtisan,
  getAllVerifiedArtisans,
  approveArtisan,
  getOwnArtisanProfile,
  updateOwnArtisanProfile,
  getArtisanById,
  getPendingArtisans 
} = require('../controllers/artisanController');

const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

// Public: View individual artisan profile by ID
router.get('/:id', getArtisanById);

// Register artisan (protected)
router.post('/register', verifyToken, registerArtisan);

// Artisan views their own profile
router.get('/me', verifyToken, getOwnArtisanProfile);

// Artisan updates their profile
router.put('/me', verifyToken, updateOwnArtisanProfile);

// Admin: View all pending artisans (not yet verified)
router.get('/pending', verifyToken, isAdmin, getPendingArtisans);

// Public: List of verified artisans
router.get('/verified', getAllVerifiedArtisans);

// Admin: Approve artisan
router.patch('/approve/:id', verifyToken, isAdmin, approveArtisan);

module.exports = router;
