const express = require('express');
const animalsRouter = require('./animals');

const router = express.Router();
router.use('/animals', animalsRouter);


module.exports =router;