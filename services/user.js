const {User} = require('../models/user');

async function createUser(username, password, isManager) {
    try {
      const newUser = new User({
        username,
        password,
        isManager
      });
  
      await newUser.save();
      
      return newUser;
    } catch (error) {
      throw new Error('An error occurred while creating the user');
    }
  }
  

  const createUsers = async (username,password,isManager) => {
    const item1 = new User({username,password, isManager});
    await item1.save();
    return item1;
}

  
  async function findUserByUsername(username) {
    return User.findOne({ username });
  }
  
  async function verifyPassword(user, password) {
    return user && user.password === password;
  }

  async function changePassword(username, newPassword) {
    const user = await User.findOne({ username });
  
    if (!user) {
      throw new Error('User not found');
    }
  
    user.password = newPassword;
    await user.save();
  
    return user;
  }
  async function deleteUser(username) {
    const deletedUser = await User.findOneAndDelete({ username });
  
    if (!deletedUser) {
      throw new Error('User not found');
    }
  
    return deletedUser;
  }

  module.exports = {
    createUser,createUsers,findUserByUsername,verifyPassword,changePassword,deleteUser
  };