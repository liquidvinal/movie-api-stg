var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ActorSchema = new Schema({
  movies: {
    type: Schema.Types.ObjectId,
    ref: "Movie"
  },
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  yearofbirth: {
    type: Date,
    required: true
  },
  nationality: {
    type: String,
    required: true,
    lowercase: true
  },
  picture: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Actor", ActorSchema);
