const { default: mongoose } = require("mongoose");
const { User } = require("../models/user");

const createUser = async (username, password, isManager) => {
  try {
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      username,
      password,
      isManager,
    });

    await newUser.save();

    return newUser;
  } catch (error) {
    throw new Error("An error occurred while creating the user");
  }
};

async function findUserByUsername(username) {
  return User.findOne({ username });
}

async function verifyPassword(user, password) {
  return user && user.password === password;
}

async function changePassword(username, newPassword) {
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error("User not found");
  }

  user.password = newPassword;
  await user.save();

  return user;
}
async function deleteUser(username) {
  const deletedUser = await User.findOneAndDelete({ username });

  if (!deletedUser) {
    throw new Error("User not found");
  }

  return deletedUser;
}

async function getUserCart(username) {
  const user = await User.findOne({ username });
  const userCart = user.cart;

  return userCart;
}

async function addToUserCart(username, itemId) {
  try {
    const user = await User.findOne({ username });
    userCart = user.cart;
    itemObjectId = new mongoose.Types.ObjectId(itemId);
    userCart.push(itemObjectId);
    user.save();

    return userCart;
  } catch (error) {
    throw new Error("An error occurred while adding item to the user's cart");
  }
}

async function deleteFromUserCart(username, itemIds) {
  try {
    const user = await User.findOne({ username });
    let userCart = user.cart; // Assign user's cart to a mutable variable

    // Filter out items that are in itemIds from userCart
    userCart = userCart.filter((itemId) => {
      const itemStringId = itemId.toString();
      const index = itemIds.indexOf(itemStringId);
      if (index !== -1) {
        itemIds.splice(index, 1); // Remove the item ID from itemIds
        return false; // Remove the item from userCart
      }
      return true; // Keep the item in userCart
    });

    user.cart = userCart; // Assign the updated userCart back to the user
    await user.save(); // Save the user document to persist the changes

    return userCart;
  } catch (error) {
    throw new Error(
      "An error occurred while removing an item from the user's cart"
    );
  }
}

async function addPurchase(username, purchaseId) {
  try {
    const user = await User.findOne({ username });
    userPurchases = user.purchases;
    purchaseObjectId = new mongoose.Types.ObjectId(purchaseId);
    userPurchases.push(purchaseObjectId);
    user.save();

    return userCart;
  } catch (error) {
    throw new Error(
      "An error occurred while adding purchase to the user's purchases"
    );
  }
}

async function getUserCount() {
  const userCount = await User.countDocuments();

  return userCount;
}

module.exports = {
  createUser,
  findUserByUsername,
  verifyPassword,
  changePassword,
  deleteUser,
  deleteFromUserCart,
  getUserCart,
  addToUserCart,
  addPurchase,
  getUserCount,
};
