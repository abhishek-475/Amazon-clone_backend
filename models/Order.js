// backend/models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  paymentId: { type: String },
  userId: { type: String },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: String,
    price: Number,
    quantity: Number,
    image: String
  }],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'pending' },
  shippingAddress: {
    name: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
    phone: String
  },
  paymentMethod: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);