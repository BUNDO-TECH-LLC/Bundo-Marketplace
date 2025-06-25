const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const verifyToken = require('../middleware/verifyToken');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected test route
router.get('/profile', verifyToken, (req, res) => {
  res.json({ message: `Welcome user ${req.user.userId}` });
});

module.exports = router;
