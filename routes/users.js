const express = require("express");
const router = express.Router();
const User = require("../models/User");

// 🟢 Create or update user after Firebase signup/login
router.post("/", async (req, res) => {
  try {
    const { name, email, googleId, authProvider } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      // Update provider info if necessary
      if (authProvider && user.authProvider !== authProvider) {
        user.authProvider = authProvider;
        await user.save();
      }

      return res.status(200).json({ message: "User already exists", user });
    }

    // Create new user
    user = new User({
      name,
      email,
      googleId,
      authProvider: authProvider || "email",
    });

    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error in user creation:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// 🟡 Get all users (for testing)
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
