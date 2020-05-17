var orm = require("../config/orm.js");

var burger = {

  // Selects all from the "burgers" table and does something with results
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  
  // Creates new data according to what is passed in, does something with results
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  // Updates whatever data is selected and does something with results
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    })
  }
};

module.exports = burger;
