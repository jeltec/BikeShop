var app = angular.module('DonationWebApp');

app.controller('aboutController',['$scope', require('./aboutcontroller')]);
app.controller('mainController',['$scope', require('./maincontroller')]);
app.controller('donateController', ['$scope', '$location', '$http', require('./donatecontroller')]);
app.controller('donationsController',['$scope','$http', require('./donationscontroller')]);
app.controller('contactController', ['$scope', require('./contactcontroller')]);