const express = require("express");
const userController = require("../controllers/user.js");

const router = express.Router();

/**
 * @swagger
 * /user/:
 *   post:
 *     summary: Create user
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - User
 */
router.post("/", userController.createUser);
/**
 * @swagger
 * /user/login/:
 *   post:
 *     summary: Login user
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - User
 */
router.post("/login", userController.loginUser);
/**
 * @swagger
 * /user/change-password:
 *   put:
 *     summary: Change password
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - User
 */
router.put("/change-password", userController.changePassword);
/**
 * @swagger
 * /user/delete:
 *   delete:
 *     summary: delete user
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - User
 */
router.delete("/delete", userController.deleteUser);

/**
 * @swagger
 * /user/cart/:username:
 *   get:
 *     summary: Get cart by user
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - User
 */
router.get("/cart/:username", userController.getUserCart);

/**
 * @swagger
 * /user/cart/:
 *   post:
 *     summary: Add item to user's cart
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - User
 */
router.post("/cart", userController.addToUserCart);

/**
 * @swagger
 * /user/purchase/:
 *   post:
 *     summary: Add purchase to user's purchases
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - User
 */
router.post("/purchase", userController.addPurchase);

/**
 * @swagger
 * /user/count:
 *   get:
 *     summary: Get the number of users
 *     responses:
 *       200:
 *         description: Successful response
 *     tags:
 *       - User
 */
router.get("/count", userController.getUserCount);

module.exports = router;
