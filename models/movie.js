var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  actor: [
    {
      type: Schema.Types.ObjectId,
      ref: "Actor"
    }
  ],
  title: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  year: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Movie", MovieSchema);
