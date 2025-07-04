const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['client', 'artisan', 'admin'],
    default: 'client'
  }
}, { timestamps: true });

// ✅ Prevent re-compilation issue in development
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
