var bikes = require('../models/bikes');

var express = require('express');
var router = express.Router();

function getByValue(arr, id) {
    var result  = arr.filter(function(o) { return o.id == id;} );
    return result ? result[0] : null; // or undefined
}
 
router.home = function(req, res) {
    //route to handle all angular requests
    res.sendFile('../public/index.ejs'); // load our public/index.ejs file
};

router.findAll = function(req, res) {
    // Return a JSON representation of our list
    res.json(bikes);
};

router.addBike = function(req, res) {
    //Add a new donation to our list
    var id = Math.floor((Math.random() * 1000000) + 1);
    bikes.push({id : id, year: req.body.year,
        type: req.body.type, brand: req.body.brand, user: req.body.user, gender: req.body.gender});
    res.json({ message: 'Bike Added!'});
};
 
router.deleteBike = function(req, res) {
    //Delete the selected donation based on its id
    var bike = getByValue(bikes,req.params.id);
    var index = bikes.indexOf(bike);
    bikes.splice(index, 1);  
    router.findAll(req,res);
};

router.incrementUsers = function(req, res) {
    //Add 1 to upvotes property of the selected donation based on its id
    var bike = getByValue(bikes,req.params.id);
    if (bike) {
        bike.upvotes += 1;
        router.findAll(req,res); 
    } else {
        res.status(404);
        res.json({ message: 'Invalid Bike Id!'});
    }     
};

module.exports = router;
