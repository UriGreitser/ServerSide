const express = require('express');
const purchaseController = require('../controllers/purchase.js');


const router = express.Router();

router.post('/', purchaseController.createPurchase);




module.exports= router  