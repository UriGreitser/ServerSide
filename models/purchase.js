const mongoose = require("mongoose");

const { Schema } = mongoose;

const PurchaseSchema = new Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      required: [true, "can't be blank"],
    },
    address: {
      type: String,
      required: [true, "can't be blank"],
    },
    purchaseDate: {
      type: Date,
      required: [true, "can't be blank"],
      default: Date.now,
    },
    buyer: {
      type: Schema.Types.ObjectId,
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

const Purchase = mongoose.model("Purchase", PurchaseSchema);

module.exports = { Purchase };
