const jwt = require('jsonwebtoken');

// @desc    Register a user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // In a real app, we would:
    // 1. Check if user already exists
    // 2. Hash the password
    // 3. Create user in database
    
    // For demo purposes, we'll just create a mock user and token
    const user = {
      id: '60a4fcb0b03d2d1b3c9f1234',
      name,
      email,
    };

    // Create token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'mock_secret', {
      expiresIn: '30d',
    });

    res.status(201).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // In a real app, we would:
    // 1. Check if user exists
    // 2. Verify password
    
    // For demo purposes, we'll create a mock user and token
    const user = {
      id: '60a4fcb0b03d2d1b3c9f1234',
      name: email.split('@')[0],
      email,
    };

    // Create token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'mock_secret', {
      expiresIn: '30d',
    });

    res.status(200).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res) => {
  try {
    // In a real app, we would fetch the user from the database
    // using req.user.id which is set by the auth middleware
    
    // For demo purposes, we'll return a mock user
    const user = {
      id: req.user.id,
      name: 'Demo User',
      email: 'user@example.com',
    };

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};