const mongoose = require("mongoose");
const Gallery = new mongoose.Schema({
  desc: String,
  url:String} 
);

module.exports = mongoose.model('gallery', Gallery);