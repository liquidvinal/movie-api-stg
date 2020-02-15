var router = require("express").Router();
var Actors = require("../models/actors");

router.get("/info/actors", (req, res, next) => {
  Actors.find({}, (err, allActors) => {
    try {
      res.render("actors/view", { actors: allActors });
    } catch (err) {
      console.log(err);
    }
  });
});

module.exports = router;
