const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    _id: Schema.Types.UUID,
    Username: {
      type: String,
      required: [true, "can't be blank"],
    },

    Password: {
      type: String,
      ref: "User",
    },
    items: {
      type: [Schema.Types.ObjectId],
      ref: "Item",
    },
    total: {
      type: Number,
      required: [true, "can't be blank"],
    },
  },
  { timestamps: true }
);

module.exports = PurchaseSchema;
