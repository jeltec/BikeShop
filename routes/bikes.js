var Bike = require('../models/bikes');
//var mongoose = require('mongoose');
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
    res.json(Bike);
};

router.findOne = function(req, res) {
    var bike = getByValue(Bike,req.params.id);
    /*if(bike){
        res.json(bike);
    }else{
    */    
        res.status(404);
        res.json({message: 'Invalid Bike Id!'});
    //}
};

router.addBike = function(req, res) {
    //Add a new donation to our list
    var id = Math.floor((Math.random() * 1000000) + 1);
    Bike.push({id : id, year: req.body.year,
        type: req.body.type, brand: req.body.brand, user: req.body.user, gender: req.body.gender});
    res.json({ message: 'Bike Added!'});
};
 
router.deleteBike = function(req, res) {
    //Delete the selected donation based on its id
    var bike = getByValue(Bike,req.params.id);
    if(bike){
        var index = Bike.indexOf(bike);
        Bike.splice(index, 1);
        router.findAll(req,res);
    }else{
        res.status(404);
        res.json({message: 'Invalid Bike Id!'});
    }

};

router.incrementUsers = function(req, res) {
    //Add 1 to upvotes property of the selected donation based on its id
    var bike = getByValue(Bike,req.params.id);
    if (bike) {
        bike.users += 1;
        router.findAll(req,res); 
    } else {
        res.status(404);
        res.json({ message: 'Invalid Bike Id!'});
    }     
};
/*mongoose.connect('mongodb://localhost:27017/bikedb');

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error', err);
});
db.once('open', function () {
    console.log('connected to database');
});*/
module.exports = router;
