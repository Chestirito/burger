var orm = require("../config/orm.js");


var burger = {
    selectAll: function() {
        return new Promise(function(resolve,reject){
            orm.selectAll().then(function(result){
               
                resolve(result);
            });
        })
    },
    // The variables cols and vals are arrays.
    insertOne: function(input) {
        return new Promise(function(resolve,reject){
            orm.insertOne(input).then(function(result){
                
                resolve(result);
            });
        });
    },
    updateOne: function(input) {
        return new Promise(function(resolve,reject){
            orm.updateOne(input).then(function(result){
                
                resolve(result);
            });
        });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  