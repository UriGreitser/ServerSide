const storeLocationService = require("../services/storeLocation");

// Store Location Controller

// Get all store locations by buyer
const getAllStoreLocations = async (req, res) => {
  try {
    const storeLocations = await storeLocationService.getAllStoreLocations();
    if (!storeLocations) {
      return res.status(404).json({ message: "Store Locations not found" });
    }
    res.json(storeLocations);
  } catch (err) {
    console.error(`Error while getting store locations`, err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllStoreLocations,
};
