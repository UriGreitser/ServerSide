const express = require('express');
const itemController = require('../controllers/item.js');


const router = express.Router();

router.post('/', itemController.createItem);
router.get('/',itemController.getAllItems)
router.get('/:id', itemController.getItem);
router.put('/:title', itemController.updateItemByTitle);
router.delete('/:title', itemController.deleteItemByTitle);
router.get('/price/:min/:max', itemController.getItemsByPriceRange);

module.exports= router  