const express = require("express");
const itemController = require("../controllers/item.js");

const router = express.Router();

/**
 * @swagger
 * /item/:
 *   post:
 *     summary: Create item
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Item
 */
router.post("/", itemController.createItem);
/**
 * @swagger
 * /item/:
 *   get:
 *     summary: get all items
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Item
 */
router.get("/", itemController.getAllItems);
/**
 * @swagger
 * /item/filtered:
 *   get:
 *     summary: Get filtered items
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Item
 */
router.get("/filtered", itemController.getFilteredItems);
/**
 * @swagger
 * /item/byId/:id:
 *   get:
 *     summary: Get item by id
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Item
 */
router.get("byId/:id", itemController.getItemById);
/**
 * @swagger
 * /item/title/:title:
 *   get:
 *     summary: Get item by title
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Item
 */
router.get("/title/:title", itemController.getItemByTitle);
/**
 * @swagger
 * /item/:title:
 *   put:
 *     summary: Update item by title
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Item
 */
router.put("/:title", itemController.updateItemByTitle);
/**
 * @swagger
 * /item/:title:
 *   delete:
 *     summary: Delete item by title
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Item
 */
router.delete("/:title", itemController.deleteItemByTitle);
/**
 * @swagger
 * /item/price/:min/:max:
 *   get:
 *     summary: Get Item by price range
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - Item
 */
router.get("/price/:min/:max", itemController.getItemsByPriceRange);

module.exports = router;
