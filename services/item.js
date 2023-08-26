const { Item } = require("../models/item");

const createItem = async (title, description, price, img, size, color) => {
  const item = new Item({ title, description, price, img, size, color });
  await item.save();
  return item;
};

const getItemById = async (_id) => {
  try {
    const item = await Item.findOne({ _id }); // Find an item by id using the appropriate method
    return item;
  } catch (err) {
    throw new Error(`Error while retrieving item by id: ${err.message}`);
  }
};

const getItemByTitle = async (title) => {
  try {
    console.log(title);
    const item = await Item.findOne({ title }); // Find an item by title using the appropriate method
    return item;
  } catch (err) {
    throw new Error(`Error while retrieving item by title: ${err.message}`);
  }
};

const updateItemByTitle = async (title, newData) => {
  try {
    const updatedItem = await Item.findOneAndUpdate({ title }, newData, {
      new: true,
    });
    return updatedItem;
  } catch (err) {
    throw new Error(`Error while updating item by title: ${err.message}`);
  }
};

const deleteItemByTitle = async (title) => {
  try {
    const deletedItem = await Item.findOneAndDelete({ title });
    return deletedItem;
  } catch (err) {
    throw new Error(`Error while deleting item by title: ${err.message}`);
  }
};

const getAllItems = async () => {
  try {
    const items = await Item.find();
    return items;
  } catch (err) {
    throw new Error(`Error while retrieving items: ${err.message}`);
  }
};

const getItemsByPriceRange = async (minPrice, maxPrice) => {
  try {
    const items = await Item.find({
      price: { $gte: minPrice, $lte: maxPrice },
    });
    return items;
  } catch (err) {
    throw new Error(
      `Error while retrieving items by price range: ${err.message}`
    );
  }
};

const getItemsByIds = async (itemIds) => {
  try {
    const items = await Item.find({ _id: { $in: itemIds } });
    return items;
  } catch (error) {
    throw new Error("Error fetching items: " + error.message);
  }
};

const getFilteredItems = async (color, size, minPrice, maxPrice) => {
  try {
    // Construct the filter object based on the query parameters
    const filters = {};

    if (color) {
      filters.color = color;
    }

    if (size) {
      filters.size = size;
    }

    if (!isNaN(minPrice)) {
      filters.price = { $gte: parseFloat(minPrice) };
    }
    if (!isNaN(maxPrice)) {
      filters.price = filters.price || {};
      filters.price.$lte = parseFloat(maxPrice);
    }

    const filteredItems = await Item.find(filters);
    console.log("filtered", filteredItems);
    return filteredItems;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createItem,
  getItemByTitle,
  updateItemByTitle,
  deleteItemByTitle,
  getAllItems,
  getItemsByPriceRange,
  getItemsByIds,
  getItemById,
  getFilteredItems,
};
