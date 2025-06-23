// server/src/models/Artisan.js
const mongoose = require('mongoose');

const artisanSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true }, // Firebase UID
  name: String,
  email: String,
  skillTags: [String],
  portfolio: [String], // Image URLs
  verified: { type: Boolean, default: false },
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  location: String,
}, { timestamps: true });

module.exports = mongoose.model('Artisan', artisanSchema);
