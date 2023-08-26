const mongoose = require("mongoose");

const { Schema } = mongoose;

const ItemSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "can't be blank"],
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
    size: {
      type: String,
      required: [true, "Size can't be blank"],
    },
    color: {
      type: String,
      required: [true, "Color can't be blank"],
    },
  },
  {
    versionKey: false, // Disable the version key (__v)
  }
);

const Item = mongoose.model("Item", ItemSchema);

module.exports = { Item };
