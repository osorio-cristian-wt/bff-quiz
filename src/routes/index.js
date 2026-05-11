const { Router } = require('express');
const categoryRoutes = require('./categoryRoutes');
const questionRoutes = require('./questionRoutes');

const router = Router();

router.use('/categories', categoryRoutes);
router.use('/questions', questionRoutes);


module.exports = router;
