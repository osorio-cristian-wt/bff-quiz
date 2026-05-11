const { Router } = require('express');
const { getQuestions } = require('../controllers/questionController');

const router = Router();

// GET /api/questions?amount=10&category=24
router.get('/', getQuestions);

module.exports = router;
