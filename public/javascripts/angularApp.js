var app = angular.module('DonationWebApp', ['ngRoute']);

app.config(function($routeProvider) {
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
});

