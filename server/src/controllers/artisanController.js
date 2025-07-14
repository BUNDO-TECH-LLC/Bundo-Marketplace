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

const updateOwnArtisanProfile = async (req, res) => {
  try {
    const artisan = await Artisan.findOne({ user: req.user.userId });

    if (!artisan) {
      return res.status(404).json({ message: 'Artisan profile not found' });
    }

    const { bio, location, portfolioImages, phone, serviceType } = req.body;

    if (bio !== undefined) artisan.bio = bio;
    if (location !== undefined) artisan.location = location;
    if (portfolioImages !== undefined) artisan.portfolioImages = portfolioImages;
    if (phone !== undefined) artisan.phone = phone;
    if (serviceType !== undefined) artisan.serviceType = serviceType;

    const updated = await artisan.save();
    res.json({ message: 'Profile updated', artisan: updated });
  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getArtisanById = async (req, res) => {
  try {
    const artisan = await Artisan.findById(req.params.id).populate('user', 'name email');

    if (!artisan || !artisan.verified) {
      return res.status(404).json({ message: 'Artisan not found or not verified' });
    }

    res.json(artisan);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getPendingArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.find({ isVerified: false }).populate('user', 'name email');
    res.json({ artisans });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Proper export of ALL controllers
module.exports = {
  registerArtisan,
  getAllVerifiedArtisans,
  approveArtisan,
  getOwnArtisanProfile,
  updateOwnArtisanProfile,
  getArtisanById,
  getPendingArtisans
};
