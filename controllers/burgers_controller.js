var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll().then(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
  
router.post("/api/burgers", function(req, res) {
    console.log(req.body);
    burger.insertOne(req.body.name).then(function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.id });
    });
});
  
router.put("/api/burgers/:id", function(req, res) {
    //var condition = "id = " + req.params.id;
  
    //console.log("condition", condition);
  
    burger.updateOne(req.params.id).then(function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
  
  /*router.delete("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    cat.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });*/
  module.exports = router;
  