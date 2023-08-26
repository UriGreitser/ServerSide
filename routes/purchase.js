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
 * /purchase/count:
 *   get:
 *     summary: Get purchases count
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Purchase
 */
router.get("/count", purchaseController.getPurchaseCount);

/**
 * @swagger
 * /purchase/purchaseCountPerDate:
 *   get:
 *     summary: Get purchases per date
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Purchase
 */
router.get("/purchaseCountPerDate", purchaseController.getPurchasesPerDate);

/**
 * @swagger
 * /purchase/earningsPerDate:
 *   get:
 *     summary: Get earnings per date
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Purchase
 */
router.get("/earningsPerDate", purchaseController.getEarningsPerDate);
/**
 * @swagger
 * /purchase/purchaseById/:id:
 *   get:
 *     summary: Get purchase by id
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Purchase
 */
router.get("/purchaseById/:id", purchaseController.getPurchaseById);
/**
 * @swagger
 * /purchase/buyerId/:id:
 *   get:
 *     summary: Get all purchases by buyer id
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Purchase
 */
router.get("/buyerId/:id", purchaseController.getAllPurchasesOfBuyer);

module.exports = router;
