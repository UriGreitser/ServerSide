const express = require("express");
const storelocationController = require("../controllers/storeLocations");

const router = express.Router();

/**
 * @swagger
 * /storeLocation/:
 *   get:
 *     summary: Get all store locations for map
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - StoreLocation
 */
router.get("/", storelocationController.getAllStoreLocations);

module.exports = router;
