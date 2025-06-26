const express = require('express');
const router = express.Router();
const { createBooking, getMyBookings, getBookingsForArtisan } = require('../controllers/bookingController');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, createBooking); // Client books
router.get('/my', verifyToken, getMyBookings); // Client views their bookings
router.get('/artisan', verifyToken, getBookingsForArtisan); // Artisan views theirs

module.exports = router;
