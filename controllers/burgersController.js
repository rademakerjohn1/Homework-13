var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// redirects to "/burgers" on load
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

// Retrieves all data from burgers table and renders index
router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
  res.render("index", hbsObject);
  });
});

// Inserts user's burger name into the burger_name column of the burger table, sends json of ther resulting ID
router.post("/api/burgers", function(req, res) {
  burger.create("burger_name", [req.body.name], function(result) {
    res.json({ id: result.insertId });
  })
})

// Changes the "devoured" value of the burger with corresponding id to be true
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update({devoured: true}, condition, function() {
    res.status(200).end();
  })
})

module.exports = router;
