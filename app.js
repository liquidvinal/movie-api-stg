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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Engine
app.set("view engine", "ejs");

// Routes

app.get("/", (req, res) => {
  res.render("search");
});

app.get("/results", (req, res) => {
  var query = req.query.search;
  var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
  request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      // res.send(results["Search"][0]);
      res.render("results", { data: data, query: query });
    }
  });
});

app.listen(3000, () => console.log("Server Up and running"));
