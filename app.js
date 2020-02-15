var express = require("express");
var morgan = require("morgan");
var app = express();
var request = require("request");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// models ref
var Category = require("./models/category");
var Movie = require("./models/movie");
var Actor = require("./models/actors");

// connect to db

mongoose.connect(
  "mongodb+srv://asimnasm:oqXdff9l7Ej9ahdX@cluster0-lyfyh.mongodb.net/test?retryWrites=true&w=majority",
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected to db");
    }
  }
);

// add morgan to track
app.use(morgan("dev"));
// AdminBro route only as it crashes if we put it after the middleware
var adminRoutes = require("./routes/admin");
app.use("/admin", adminRoutes);

//middleware
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Engine
app.set("view engine", "ejs");

// Routes

var categoryRoutes = require("./routes/category");
var omdbapiRoutes = require("./routes/omdbapi");

app.use(categoryRoutes);
app.use(omdbapiRoutes);

app.listen(3000, () => console.log("Server Up and running"));
