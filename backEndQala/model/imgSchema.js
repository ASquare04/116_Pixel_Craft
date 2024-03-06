const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  imageURL: { type: String, required: true },
  heading: { type: String, required: true },
  description: { type: String },
  artistName: { type: String, required: true },
  tokenPrice: { type: String }
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;
