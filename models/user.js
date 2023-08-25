const mongoose = require("mongoose");
const { ItemSchema } = require("./item");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    //generate id automatically
    //  _id: mongoose.Schema.Types.ObjectId,
    _id: {  // Use the username as the _id
      type: String,
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
    cart: [{ type: Schema.Types.ObjectId, ref: "Item" }], // Need to change to purchase.

    purchases: [{ type: Schema.Types.ObjectId, ref: "Purchase" }],
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = { User };
