var orm = require("../config/orm.js");

var burger = {

  // Selects all from the "burgers" table and does something with results
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  
  // Runs query to insert data into the given column(s) in the burgers table and does something with result
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  // Updates the burgers table where a given condition is met, does something with result
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    })
  }
};

module.exports = burger;
