const questionService = require('../services/questionService');

const MAX_AMOUNT = 50;
const DEFAULT_AMOUNT = 10;

const getQuestions = async (req, res, next) => {
  try {
    const rawAmount = req.query.amount !== undefined ? Number(req.query.amount) : DEFAULT_AMOUNT;
    const rawCategory = req.query.category !== undefined ? Number(req.query.category) : undefined;

    if (!Number.isInteger(rawAmount) || rawAmount < 1 || rawAmount > MAX_AMOUNT) {
      return res.status(400).json({
        success: false,
        message: `El parámetro "amount" debe ser un entero entre 1 y ${MAX_AMOUNT}.`,
      });
    }

    if (rawCategory !== undefined && (!Number.isInteger(rawCategory) || rawCategory < 1)) {
      return res.status(400).json({
        success: false,
        message: 'El parámetro "category" debe ser un entero positivo válido.',
      });
    }

    const questions = await questionService.getQuestions({
      amount: rawAmount,
      category: rawCategory,
    });

    res.status(200).json({
      success: true,
      total: questions.length,
      data: questions,
    });
  } catch (error) {
    if (error.statusCode) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
      });
    }
    next(error);
  }
};

module.exports = { getQuestions };
