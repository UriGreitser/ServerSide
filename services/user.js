const { User } = require("../models/user");

async function createUser(username, password, isManager) {
  try {
    id = username;
    const newUser = new User({
      _id: username,
      username,
      password,
      isManager,
    });

    await newUser.save();

    return newUser;
  } catch (error) {
    throw new Error("An error occurred while creating the user");
  }
}

const createUsers = async (username, password, isManager) => {
  try {
    const newUser = new User({
      _id: username,
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

module.exports = {
  createUser,
  createUsers,
  findUserByUsername,
  verifyPassword,
  changePassword,
  deleteUser,
  getUserCart,
};
