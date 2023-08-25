const userService = require("../services/user.js");

// not in use!
async function createUser(req, res) {
  try {
    const { username, password, isManager } = req.body;

    const newUser = await userService.createUser(username, password, isManager);

    return res
      .status(200)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred! while creating the user" });
  }
}

//post request - create item
const createUsers = async (req, res) => {
  try {
    const { username, password, isManager } = req.body;
    const newUser = await userService.createUsers(
      username,
      password,
      isManager
    );
    res.json(newUser);
  } catch (err) {
    console.error(`Error while creating user`, err.message);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user" });
  }
};
//check if user exists
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userService.findUserByUsername(username);
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const passwordMatch = await userService.verifyPassword(user, password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(`Error while logging in`, error.message);
    res.status(500).json({ error: "An error occurred while logging in" });
  }
};

const changePassword = async (req, res) => {
  try {
    const { username, newPassword } = req.body;

    const updatedUser = await userService.changePassword(username, newPassword);

    res.json(updatedUser);
  } catch (error) {
    console.error(`Error while changing password`, error.message);
    res
      .status(500)
      .json({ error: "An error occurred while changing the password" });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { username } = req.body;

    const deletedUser = await userService.deleteUser(username);

    res.json(deletedUser);
  } catch (error) {
    console.error(`Error while deleting user`, error.message);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the user" });
  }
};

const getUserCart = async (req, res) => {
  try {
    const username = req.params.username;
    const userCart = await userService.getUserCart(username);
    res.json(userCart);
  } catch (error) {
    console.error(`Error while getting user's cart`, error.message);
    res
      .status(500)
      .json({ error: "An error occurred while getting user's cart" });
  }
};

module.exports = {
  createUser,
  createUsers,
  loginUser,
  changePassword,
  deleteUser,
  getUserCart,
};
