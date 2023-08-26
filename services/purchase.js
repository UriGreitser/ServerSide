const { Purchase } = require("../models/purchase");
const mongoose = require("mongoose");

// Purchases CRUD

// Create
const createPurchase = async (address, username, itemsIds, total) => {
  const currentUtcTime = new Date();
  const newPurchase = new Purchase({
    _id: new mongoose.Types.ObjectId(),
    address: address,
    buyer: username,
    items: itemsIds.map((id) => new mongoose.Types.ObjectId(id)),
    total: total,
    purchaseDate: currentUtcTime,
  });
  await newPurchase.save();
  return newPurchase;
};

// Get purchases
const getPurchaseById = async (_id) => {
  try {
    const purchase = await Purchase.findOne({ _id }); // Find an purchase by id using the appropriate method
    return purchase;
  } catch (err) {
    throw new Error(`Error while retrieving purchase by id: ${err.message}`);
  }
};

// Get all purchses
const getAllPurchases = async () => {
  try {
    const purchases = await Purchase.find();
    return purchases;
  } catch (err) {
    throw new Error(`Error while retrieving all purchases: ${err.message}`);
  }
};

// Get by buyer
const getAllPurchasesOfBuyer = async (buyerId) => {
  try {
    const buyerPurchases = await Purchase.find({ buyer: buyerId });
    return buyerPurchases;
  } catch (err) {
    throw new Error(`Error while retrieving buyer purchases: ${err.message}`);
  }
};

async function getPurchaseCount() {
  const purchaseCount = await Purchase.countDocuments();

  return purchaseCount;
}

module.exports = {
  createPurchase,
  getPurchaseById,
  getAllPurchases,
  getAllPurchasesOfBuyer,
  getPurchaseCount,
};
