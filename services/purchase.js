// const PurchaseSchema = require('../models/purchase');
const {Purchase} = require('../models/purchase');

async function createPurchase(purchaseData) {
  try {
    const { purchaseDate, buyer, items, total } = purchaseData;

    // Find the latest purchase

    const newPurchase = new Purchase({
      purchaseDate,
      buyer,
      items,
      total,
    });

    await newPurchase.save();

    return newPurchase;
  } catch (error) {
    console.error('Error creating purchase:', error);
    throw new Error('An error occurred while creating the purchase');
  }
}


module.exports = {createPurchase}