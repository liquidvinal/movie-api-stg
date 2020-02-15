var router = require("express").Router();
var request = require("request");

router.get("/", (req, res) => {
  res.render("search");
});

router.get("/results", (req, res) => {
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

module.exports = router;
