const purchaseService = require('../services/purchase.js')

//post request - create item
const createPurchase = async (req, res) => {
  console.log("B2222EFORE")
    const { purchaseDate, buyer, items, total } = req.body;
  
    try {
      console.log("BEFORE")
      const newPurchase = await purchaseService.createPurchase(purchaseDate, buyer, items, total);
      console.log("after")

      res.status(201).json(newPurchase); // HTTP status 201 indicates "Created"
    } catch (error) {
      console.error(`Error while creating purchase`, error.message);
      res.status(500).json({ error: 'An error occurred while creating the purchase' });
    }
  };
module.exports = {createPurchase}