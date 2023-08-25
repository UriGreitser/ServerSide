const mongoose = require("mongoose");

const { Schema } = mongoose;

const ItemSchema = new Schema({
  title: {
    type: String,
    required: [true, "can't be blank"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "can't be blank"],
  },
  price: {
    type: Number,
    required: [true, "can't be blank"],
  },
  img: {
    type: String,
    required: [true, "can't be blank"],
  },
  stock: [{
    size: {
      type: String,
      required: [true, "Size can't be blank"],
    },
    color: {
      type: String,
      required: [true, "Color can't be blank"],
    },
    colorHex: {
      type: String,
      required: [true, "Color hex can't be blank"],
    },
    numberOfItems: {
      type: Number,
      required: [true, "Number of items can't be blank"],
      default: 0,
    },
  }],
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = { Item };
