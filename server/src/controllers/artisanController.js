// server/src/controllers/artisanController.js
const Artisan = require('../models/artisan');

exports.registerArtisan = async (req, res) => {
  const { uid, name, email, skillTags, portfolio, location } = req.body;

  try {
    const exists = await Artisan.findOne({ uid });
    if (exists) return res.status(409).json({ message: 'Already registered' });

    const artisan = await Artisan.create({
      uid, name, email, skillTags, portfolio, location
    });

    res.status(201).json(artisan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getArtisanProfile = async (req, res) => {
  const { uid } = req.params;
  try {
    const artisan = await Artisan.findOne({ uid });
    if (!artisan) return res.status(404).json({ message: 'Not found' });

    res.json(artisan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.find().sort({ rating: -1 });
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
