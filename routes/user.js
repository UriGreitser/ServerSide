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
router.post("/", userController.createUsers);
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

module.exports = router;
