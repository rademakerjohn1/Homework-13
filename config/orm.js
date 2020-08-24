
var connection = require("./connection.js");

// Takes a number and creates a string of question marks 
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Takes a given object and creates a string out of key/value pairs for SQL
function objToSql(ob) {
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

  // Runs a query to insert data into a given table's given column(s) and do something with result
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (" + cols.toString() + ") ";
    queryString += "VALUES (" + printQuestionMarks(vals.length) + "); ";
    connection.query(queryString, vals, function(err, result) {
      if (err) {throw err};
      cb(result);
    })
  },

  // Runs a query to update a given table where a given condition is met and do something with result
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
