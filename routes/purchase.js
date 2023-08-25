const express = require("express");
const purchaseController = require("../controllers/purchase.js");

const router = express.Router();

/**
 * @swagger
 * /purchase/:
 *   post:
 *     summary: Create new purchase
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Purchase
 */
router.post("/", purchaseController.createPurchase);
/**
 * @swagger
 * /purchase/:
 *   get:
 *     summary: Get all purchases
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Purchase
 */
router.get("/", purchaseController.getAllPurchases);
/**
 * @swagger
 * /purchase/:id:
 *   get:
 *     summary: Get purchase by id
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Purchase
 */
router.get("/:id", purchaseController.getPurchaseById);
/**
 * @swagger
 * /purchase/:buyerId:
 *   get:
 *     summary: Get all purchases by buyer id
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Purchase
 */
router.get("/:buyerId", purchaseController.getAllPurchasesOfBuyer);

module.exports = router;
