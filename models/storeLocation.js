const mongoose = require("mongoose");

const { Schema } = mongoose;

const StoreLocationSchema = new Schema(
  {
    _id: Schema.Types.UUID,
    address: {
      type: String,
      required: [true, "can't be blank"],
    },
    lat: {
      type: Number,
      required: [true, "can't be blank"],
    },
    lng: {
      type: Number,
      required: [true, "can't be blank"],
    },
  },
  { timestamps: true }
);

const StoreLocation = mongoose.model("StoreLocation", StoreLocationSchema);

module.exports = { StoreLocation };
