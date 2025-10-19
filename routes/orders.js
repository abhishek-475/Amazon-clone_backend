const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Create new order
router.post('/', async (req, res) => {
  try {
    const { orderId, paymentId, userId, items, totalAmount, shippingAddress, paymentMethod } = req.body;
    
    const order = new Order({
      orderId,
      paymentId,
      userId,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
      status: 'confirmed'
    });
    
    await order.save();
    res.status(201).json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get user orders
router.get('/user/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId })
      .sort({ createdAt: -1 })
      .populate('items.productId');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.productId');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;