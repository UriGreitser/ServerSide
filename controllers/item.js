const itemService = require("../services/item.js");

//post request - create item
const createItem = async (req, res) => {
  try {
    res.json(
      await itemService.createItem(
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.img,
        req.body.size,
        req.body.color
      )
    );
  } catch (err) {
    console.error(`Error while creating item`, err.message);
  }
};

const getItemById = async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await itemService.getItemById(itemId);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (err) {
    console.error(`Error while getting item`, err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

//get request - get by title.
const getItemByTitle = async (req, res) => {
  try {
    const itemTitle = req.params.title;
    const item = await itemService.getItemByTitle(itemTitle);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (err) {
    console.error(`Error while getting item`, err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

//update request - update by title.
const updateItemByTitle = async (req, res) => {
  try {
    const title = req.params.title; // Assuming the title is passed as a parameter
    const updatedItem = await itemService.updateItemByTitle(title, req.body);
    res.json(updatedItem);
  } catch (err) {
    console.error(`Error while updating item by title`, err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

//delete item by title
const deleteItemByTitle = async (req, res) => {
  try {
    const title = req.params.title; // Assuming the title is passed as a parameter
    const deletedItem = await itemService.deleteItemByTitle(title);
    res.json(deletedItem);
  } catch (err) {
    console.error(`Error while deleting item by title`, err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

//get list of all items
const getAllItems = async (req, res) => {
  try {
    const items = await itemService.getAllItems();
    res.json(items);
  } catch (err) {
    console.error(`Error while retrieving items`, err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

//get items with price between two integers.
const getItemsByPriceRange = async (req, res) => {
  try {
    const minPrice = parseFloat(req.params.min);
    const maxPrice = parseFloat(req.params.max);
    const items = await itemService.getItemsByPriceRange(minPrice, maxPrice);
    res.json(items);
  } catch (err) {
    console.error(`Error while retrieving items by price range`, err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createItem,
  getItemById,
  getItemByTitle,
  updateItemByTitle,
  deleteItemByTitle,
  getAllItems,
  getItemsByPriceRange,
};
