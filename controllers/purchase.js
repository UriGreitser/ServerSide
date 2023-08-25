const purchaseService = require('../services/purchase.js')

//post request - create item
async function createPurchase(req, res) {
  try {
    const { purchaseDate, buyer, items, total } = req.body;

    const newPurchase = await purchaseService.createPurchase({ purchaseDate, buyer, items, total });

    res.status(201).json(newPurchase);
  } catch (error) {
    console.error('Error creating purchase:', error);
    res.status(500).json({ error: 'An error occurred while creating the purchase' });
  }
}
module.exports = {createPurchase}