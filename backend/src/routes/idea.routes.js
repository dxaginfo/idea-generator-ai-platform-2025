const express = require('express');
const router = express.Router();
const {
  generateIdeas,
  getSavedIdeas,
  saveIdea,
  deleteIdea,
} = require('../controllers/idea.controller');
const { protect } = require('../middleware/auth.middleware');

router.get('/generate', protect, generateIdeas);
router.get('/', protect, getSavedIdeas);
router.post('/save', protect, saveIdea);
router.delete('/:id', protect, deleteIdea);

module.exports = router;