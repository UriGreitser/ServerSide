const mongoose = require("mongoose");

const { Schema } = mongoose;

const PurchaseSchema = new Schema(
  {
    _id: Schema.Types.UUID,
    purchaseDate: {
      type: Date,
      required: [true, "can't be blank"],
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
