const mongoose = require("mongoose");

const { Schema } = mongoose;

const ItemSchema = new Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    required: [true, "can't be blank"],
  },
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
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = { Item };
