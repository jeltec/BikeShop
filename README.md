/* eslint-disable */
# Assignment 1 - API testing and Source Control.

Name: Jelte Crabbé

## Overview.

Bikeshop is a charity in which people can rent or buy a bike and donate it back when they don't need it anymore.
This is why the bike object has users, this way everyon can see who donated it back to the shop. This means that it should be possible for the amount of users to be updated (PUT /bikes/:id/users). Visitors of the shop should be able to see a list of all the bikes available (GET /bikes), or get information about a specific bike (GET /bikes/:id). Becaue there are always new bikes coming to the shop, it should be possible to add bikes to the list (POST /bikes/) and delete the ones that are not available anymore (DELETE /bikes/:id).

## API endpoints.

 + GET /bikes , or get information about a specific bike - Get all bikes.
 + GET /bikes/:id - Get a bike based on bike ID
 + POST /bikes/ - Add a bike
 + PUT /bikes/:id/users - Add a user to a bike
 + DELETE /bikes/:id - Deletes a bike based on bike ID


## Sample Test execution.

        $ 
            > BikeShop@0.0.0 test /Users/jelte/Downloads/BikeShop
            > NODE_ENV=test mocha test/routes/bikes-test.js

            Bikes
            GET /bikes
            GET /bikes 200 10.079 ms - 159
                  ✓ should return an array with all bikes (40ms)
            GET /bikes/:id
            GET /bikes/1100001 404 1.863 ms - 30
                  ✓ should return a 404 status and message for invalid bike id
            POST /bikes
            POST /bikes 200 14.426 ms - 25
                  ✓ should return confirmation message and update database
            PUT /bikes/:id/users
            PUT /bikes/1000001/users 200 1.016 ms - 235
                  ✓ should return all bikes with users of specified bike incremented
            PUT /bikes/1100001/users 404 0.855 ms - 30
                  ✓ should return a 404 status and message for invalid bike id
            DELETE /bikes/:id
            DELETE /bikes/1000001 200 1.032 ms - 158
                  ✓ should not return the deleted bike
            DELETE /bikes/1100001 404 0.421 ms - 30
                  ✓ should return a 404 status and message for invalid bike id

            GET /bikes 200 0.592 ms - 158
            GET /bikes 200 0.471 ms - 158

            7 passing (95ms)
        $

