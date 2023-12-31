const { StoreLocation } = require("../models/storeLocation");

// StoreLocationSchema CRUD

// Get all
const getAllStoreLocations = async () => {
  try {
    const storeLocations = await StoreLocation.find();
    return storeLocations;
  } catch (err) {
    throw new Error(`Error while retrieving store locations: ${err.message}`);
  }
};

module.exports = {
  getAllStoreLocations,
};
