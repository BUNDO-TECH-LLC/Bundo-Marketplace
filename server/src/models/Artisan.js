const mongoose = require('mongoose');

const artisanSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  serviceType: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  location: {
    type: String
  },
  portfolioImages: [String], // URLs or base64 images
  phone: {
    type: String
  },
  isVerified: {
    type: Boolean,
    default: false // Only admin can set this to true
  }
}, { timestamps: true });

module.exports = mongoose.model('Artisan', artisanSchema);
