var orm = require("../config/orm.js");


var burger = {
    selectAll: function() {
        orm.selectAll().then(function(result){
            return result;
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function(input) {
        orm.insertOne(input).then(function(result){
            return result;
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne(input).then(function(result){
            return result;
        });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  