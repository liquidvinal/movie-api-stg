var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  }
});

module.exports = mongoose.model("Category", CategorySchema);
