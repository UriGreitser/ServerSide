const purchaseService = require('../services/purchase.js')
const { User } = require("./user");
const { Item } = require("./item");
const userService = require('../services/user.js')
const itemService = require('../services/item.js')



const createPurchase = async (req, res) => {
  try {
    const { username, itemIds, totalAmount } = req.body;

    const buyer = await userService.findUserByUsername(username) // Find the buyer by username
    console.log("NIGHT")
    console.log(buyer)
    if (!buyer) {
      return res.status(404).json({ error: "Buyer not found" });
    }
    console.log(buyer)

    const items = await itemService.getItemsByIds(itemIds);
    if (items.length !== itemIds.length) {
      return res.status(404).json({ error: "Some items not found" });
    }
    console.log("TEST 11 ")

    const purchaseData = {
      purchaseDate: new Date(),
      buyer: buyer.username, // Use the ObjectId of the buyer
      items: itemIds,
      total: totalAmount,
    };
console.log("TEST 1 ")
    const createdPurchase = await purchaseService.createPurchase(purchaseData,buyer);
    return res.status(201).json(createdPurchase);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {createPurchase}