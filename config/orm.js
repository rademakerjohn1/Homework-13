
var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {

  // Runs a query to select all from a table and do something with the result
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {throw err};
      cb(result);
    });
  },

  // Runs a query to insert data into database and do something with result
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (" + cols.toString() + ") ";
    queryString += "VALUES (" + printQuestionMarks(vals.length) + "); ";
    connection.query(queryString, vals, function(err, result) {
      if (err) {throw err};
      cb(result);
    })
  },

  // Runs a query to update a given selection of the database and do something with the result
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET " + objToSql(objColVals);
    queryString += " WHERE " + condition;
    connection.query(queryString, function(err, result) {
      if (err) {throw err};
      cb(result);
    })

  }
};

module.exports = orm;
