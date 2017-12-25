# Assignment 2 - Automated development process.

Name: Jelte Crabbé

Student No.:  20078727

## Overview.

Bikeshop is a charity in which people can rent or buy a bike and donate it back when they don't need it anymore. This is why the bike object has users, this way everyon can see who donated it back to the shop. This means that it should be possible for the amount of users to be updated (PUT /bikes/:id/users). Visitors of the shop should be able to see a list of all the bikes available (GET /bikes), or get information about a specific bike (GET /bikes/:id). Becaue there are always new bikes coming to the shop, it should be possible to add bikes to the list (POST /bikes/) and delete the ones that are not available anymore (DELETE /bikes/:id). Together with this, there is build automation, code quality and acceptance testing.

## Build automation.

build : npm run build:dev

acceptance test : 
          terminal 1 : npm run server
          terminal 2 : npm run acctest

run : npm run server
          

## Acceptance Testing.

Homepage
     > BikeShop@0.0.0 acctest /Users/jelte/Desktop/BikeShop
     > cross-env NODE_ENV=test PORT=4000 mocha test/acceptance/
     $ 
  Home page
    ✓ shows the main body
    ✓ shows the nav bar
    ✓ shows the buttons (131ms)
    ✓ shows the main image
    $

Donate
$         
  Donate page
    ✓ shows the main header (38ms)
    1) accepts donation and displays in list
    2) "after each" hook: ret for "accepts donation and displays in list"
$

View All Donations
$         
  Donations page
    ✓ shows the main header
    3) displays the donations
$

About 
$
  About page
    ✓ shows the main body
    ✓ shows the nav bar
    ✓ shows the buttons (43ms)
    ✓ shows the main image
$

Contact
$
  Contact page
    ✓ shows the main body
    ✓ shows the nav bar
    ✓ shows the buttons (134ms)
    ✓ shows the main image
$

## Continuous Integration.

Doesn't work.

