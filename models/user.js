const mongoose = require("mongoose");
const { ItemSchema } = require("./item");

const { Schema } = mongoose;

const UserSchema = new Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    required: [true, "can't be blank"],
  },
  username: {
    type: String,
    required: [true, "can't be blank"],
  },
  password: {
    type: String,
    required: [true, "can't be blank"],
  },
  isManager: {
    type: Boolean,
    default: false,
  },
  cart: [{ type: Schema.Types.ObjectId, ref: "Item" }],

  purchases: [{ type: Schema.Types.ObjectId, ref: "Purchase" }],
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
