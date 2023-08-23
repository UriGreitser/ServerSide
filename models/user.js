const mongoose = require("mongoose");
const { ItemSchema } = require("./item");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    //generate id automatically
    //  _id: mongoose.Schema.Types.ObjectId,
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
    items: [{ type: Schema.Types.ObjectId, ref: "Item" }], // Need to change to purchase.
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = { User };
