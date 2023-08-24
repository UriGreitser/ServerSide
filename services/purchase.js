const {Purchase} = require('../models/purchase');

async function createPurchase(purchaseDate, buyer, items, total) {
    const newPurchase = new Purchase({
      _id: new mongoose.Types.ObjectId(), // Generate a new ObjectId
      purchaseDate,
      buyer,
      items,
      total
    });
  
    await newPurchase.save();
    
    return newPurchase;
  }


module.exports = {createPurchase}