const storeLocationService = require("../services/storeLocation");

// Store Location Controller

TOKEN = 'EAALxud9bUkABO6v5BLsZBDl5uJ9vSoGWrZB1UOhGayKL8iVBKC0pYyCZA5gZCaZCeJ6oMm4tCg6j1sEGVTOKLXsvrPrVc2vGDt4p5l5vmGALumZCVoM7hTfTKwIQYh9teVJZA9KZAHf1ZC33hHf7JXF9rF5ZAOVLehYsYnn6omkYwlcpgB0c137zMXTTQN67zfORQZD'
PAGE_ID = '107152572488247'
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

const fetch = require('node-fetch'); // Make sure to import the 'node-fetch' library if you haven't already.

const getAllComments = async (req, res) => {
  try {
    const response = await fetch('https://graph.facebook.com/v17.0/107152572488247/feed?fields=id%2Ccomments&access_token=EAALxud9bUkABO6v5BLsZBDl5uJ9vSoGWrZB1UOhGayKL8iVBKC0pYyCZA5gZCaZCeJ6oMm4tCg6j1sEGVTOKLXsvrPrVc2vGDt4p5l5vmGALumZCVoM7hTfTKwIQYh9teVJZA9KZAHf1ZC33hHf7JXF9rF5ZAOVLehYsYnn6omkYwlcpgB0c137zMXTTQN67zfORQZD');
    const data = await response.json();
    //foreach data.data[0].comments.data[0].message add to array
    // console.log(data.data[0].comments);
    const allMessages = [];
    for (const comment of (data.data[0].comments).data) {
      allMessages.push(comment.message);
    }
    console.log(allMessages)
    res.status(200).json(data); // Sending the data as a JSON response
  } catch (err) {
    console.error(`Error while getting comments`, err.message);
    res.status(500).json({ message: "Internal server error" });
  }
  const allComments = [];
  // console.log(data)
//   for (const entry of data.data) {
//   for (const comment of entry.comments.data) {
//     const message = comment.message;
//     allComments.push(message);
//   }
// }
};


module.exports = {
  getAllStoreLocations,getAllComments
};
