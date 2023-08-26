const purchaseService = require("../services/purchase.js");

// Purchase Controller

// Create purchase
const createPurchase = async (req, res) => {
  try {
    res.json(
      await purchaseService.createPurchase(
        req.body.address,
        req.body.username,
        req.body.items,
        req.body.total
      )
    );
  } catch (err) {
    console.error(`Error while creating purchase`, err.message);
  }
};

// Get purchase by id
const getPurchaseById = async (req, res) => {
  try {
    const purchaseId = req.params.id; // Assuming you're passing the item ID as a parameter in the URL
    const purchase = await purchaseService.getPurchaseById(purchaseId);
    if (!purchase) {
      return res.status(404).json({ message: "Purchase not found" });
    }
    res.json(purchase);
  } catch (err) {
    console.error(`Error while getting purchase`, err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all purchases
const getAllPurchases = async (req, res) => {
  try {
    const purchases = await purchaseService.getAllPurchases();
    if (!purchases) {
      return res.status(404).json({ message: "Purchases not found" });
    }
    res.json(purchases);
  } catch (err) {
    console.error(`Error while getting all purchases`, err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all purchases by buyer
const getAllPurchasesOfBuyer = async (req, res) => {
  try {
    const buyerId = req.params.id;
    const purchases = await purchaseService.getAllPurchasesOfBuyer(buyerId);
    if (!purchases) {
      return res.status(404).json({ message: "Buyer purchases not found" });
    }
    res.json(purchases);
  } catch (err) {
    console.error(`Error while getting purchases`, err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPurchaseCount = async (req, res) => {
  try {
    const purchasesCount = await purchaseService.getPurchaseCount();
    if (!purchasesCount) {
      return res.status(404).json({ message: "Purchases count not found" });
    }
    res.json(purchasesCount);
  } catch (err) {
    console.error(`Error while getting purchases count`, err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createPurchase,
  getPurchaseById,
  getAllPurchases,
  getAllPurchasesOfBuyer,
  getPurchaseCount,
};
