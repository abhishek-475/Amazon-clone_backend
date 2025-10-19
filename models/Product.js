const mongoose = require('mongoose');

// models/Product.js
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  images: [{ type: String }],
  brand: { type: String, required: true },
  countInStock: { type: Number, required: true, default: 0 },
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  features: [{ type: String }],
  specifications: { type: Object },
  isFeatured: { type: Boolean, default: false },
  discount: { type: Number, default: 0 }, // percentage discount
  fastDelivery: { type: Boolean, default: false },
  returnPolicy: { type: String, default: '7 days return policy' },
  seller: { type: String, default: 'Amazon' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);