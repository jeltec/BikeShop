require('angular');
require('angular-route');
var app = angular.module('DonationWebApp', ['ngRoute']);
require('./controllers/index');
require('../../node_modules/bootstrap/dist/css/bootstrap.css' );
require('../../node_modules/font-awesome/css/font-awesome.css' );
require('../stylesheets/style.css');
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl : 'public/pages/home.ejs',
            controller  : 'mainController'
        })
        // route for the donate page
        .when('/donate', {
            templateUrl : 'public/pages/donate.ejs',
            controller  : 'donateController'
        })
        // route for the donations page
        .when('/donations', {
            templateUrl : 'public/pages/donations.ejs',
            controller  : 'donationsController'
        })
        // route for the about page
        .when('/about', {
            templateUrl : 'public/pages/about.ejs',
            controller  : 'aboutController'
        })
        // route for the contact page
        .when('/contact', {
            templateUrl : 'public/pages/contact.ejs',
            controller  : 'contactController'
        });
}]);

