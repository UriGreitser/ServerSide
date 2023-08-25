// const PurchaseSchema = require('../models/purchase');
const {Purchase} = require('../models/purchase');

const createPurchase = async (purchaseData,buyer) => {
  try {
    date = new Date()
    items = purchaseData.items
    total = purchaseData.total
    console.log("TEST 2!@#$!@$!#$ ")
    console.log(buyer)

    const purchase = new Purchase({date,buyer,items,total});
    await purchase.save();
    return purchase;
    // const item1 = new Item({title,description, price, img});
    // await item1.save();
  } catch (error) {
    throw new Error("Error creating purchase: " + error.message);
  }
};


module.exports = {createPurchase}