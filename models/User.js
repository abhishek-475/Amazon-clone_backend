const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  googleId: { type: String },
  authProvider: { type: String, enum: ['email', 'google'], default: 'email' },
  addresses: [{
    name: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
    phone: String,
    isDefault: { type: Boolean, default: false }
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);