const path = require('path');

const express = require('express');

const productController= require('../Controllers/product')

const router = express.Router();

router.get('/',productController.getProudct);

module.exports = router;
