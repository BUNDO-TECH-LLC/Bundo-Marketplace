const Booking = require('../models/booking');

const createBooking = async (req, res) => {
  const { artisanId, serviceDetails, scheduledDate, notes } = req.body;

  try {
    const newBooking = await Booking.create({
      client: req.user.userId,
      artisan: artisanId,
      serviceDetails,
      scheduledDate,
      notes
    });

    res.status(201).json({ message: 'Booking created', booking: newBooking });
  } catch (err) {
    console.error('Booking error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ client: req.user.userId })
      .populate('artisan', 'serviceType location')
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getBookingsForArtisan = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('client', 'name email')
      .where('artisan')
      .equals(req.user.userId) // match artisan’s userId
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createBooking,
  getMyBookings,
  getBookingsForArtisan
};
