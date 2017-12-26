# Assignment 2 - Automated development process.

Name: Jelte Crabbé

Student No.:  20078727

## Overview.

Bikeshop is a charity in which people can rent or buy a bike and donate it back when they don't need it anymore. This is why the bike object has users, this way everyon can see who donated it back to the shop. This means that it should be possible for the amount of users to be updated (PUT /bikes/:id/users). Visitors of the shop should be able to see a list of all the bikes available (GET /bikes), or get information about a specific bike (GET /bikes/:id). Becaue there are always new bikes coming to the shop, it should be possible to add bikes to the list (POST /bikes/) and delete the ones that are not available anymore (DELETE /bikes/:id). Together with this, there is build automation, code quality and acceptance testing.

## Build automation.

build : npm run build:dev

acceptance test : 
          mocha test/acceptance


          

## Acceptance Testing.

MacBook-Pro-Jelte:BikeShop jelte$ mocha test/acceptance

$
  About page
    ✓ shows the main body
    ✓ shows the nav bar (77ms)
    ✓ shows the buttons (50ms)
    ✓ shows the main title

  Donations page
    ✓ shows the main header
    ✓ shows the title
    ✓ displays the bikes (69ms)

  Contact page
    ✓ shows the main body
    ✓ shows the nav bar
    ✓ shows the buttons (77ms)
    ✓ shows the main title

  Rebike page
    ✓ shows the main body
    ✓ shows the nav bar
    ✓ shows the buttons (47ms)
    ✓ read more button redirects to about page (143ms)

  Donate page
    ✓ shows the main header
    ✓ accepts donation and displays bikes in list (417ms)

  Rebike page
    ✓ shows the main body
    ✓ shows the nav bar
    ✓ shows the buttons (69ms)
    ✓ read more button redirects to about page (137ms)


  21 passing (17s)
$
## Continuous Integration.

Build passes.

Travis link: https://travis-ci.org/jeltec/BikeShop/

Coverall link: https://coveralls.io/github/jeltec/BikeShop

heroku link: https://dashboard.heroku.com/apps/rebikeshop

