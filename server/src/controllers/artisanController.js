const Artisan = require('../models/Artisan');

const registerArtisan = async (req, res) => {
  const { serviceType, bio, location, portfolioImages, phone } = req.body;

  try {
    const existing = await Artisan.findOne({ user: req.user.userId });
    if (existing) return res.status(400).json({ message: 'Artisan profile already exists' });

    const artisan = new Artisan({
      user: req.user.userId,
      serviceType,
      bio,
      location,
      portfolioImages,
      phone
    });

    await artisan.save();
    res.status(201).json({ message: 'Artisan profile created', artisan });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getAllVerifiedArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.find({ isVerified: true }).populate('user', 'name email');
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const approveArtisan = async (req, res) => {
  try {
    const artisan = await Artisan.findById(req.params.id);
    if (!artisan) return res.status(404).json({ message: 'Artisan not found' });

    artisan.isVerified = true;
    await artisan.save();
    res.json({ message: 'Artisan approved', artisan });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getOwnArtisanProfile = async (req, res) => {
  try {
    const artisan = await Artisan.findOne({ user: req.user.userId });
    if (!artisan) return res.status(404).json({ message: 'Profile not found' });

    res.json(artisan);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  registerArtisan,
  getAllVerifiedArtisans,
  approveArtisan,
  getOwnArtisanProfile
};
