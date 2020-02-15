var router = require("express").Router();
var Category = require("../models/category");

router.get("/info/category", (req, res, next) => {
  Category.find({}, (err, allCategories) => {
    try {
      res.render("category/view", { category: allCategories });
    } catch (err) {
      console.log(err);
    }
  });
});

module.exports = router;
