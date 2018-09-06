var connection = require("./connection.js");

var orm = {
  selectAll: function() {
    return new Promise(function(resolve,reject){
      var queryString = "SELECT * FROM burgers";

      connection.query(queryString, function(err, result) {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
  insertOne: function(input) {
    return new Promise(function(resolve,reject){
        var queryString = "INSERT INTO burgers(burger_name) VALUES (?)";

        connection.query(queryString, input, function(err, result) {
            if (err) reject(err);
            resolve(result);
        });
    })
  },
  updateOne: function(match) {
    return new Promise(function(resolve,reject){
        
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";

        connection.query(queryString, [match], function(err, result) {
            if (err) reject(err);
            resolve(result);
        });
    })
  }

};

module.exports = orm;
