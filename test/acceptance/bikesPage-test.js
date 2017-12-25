var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;

test.describe('Donations page', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('donations');
    } );
    test.beforeEach( function() {
        driver.get('http://localhost:3000/#/donations');
        driver.wait(until.elementLocated(pageSelector), 2000);
    } );

    test.it( 'shows the main header', function() {
        driver.findElement(By.tagName('h1')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('All bikes available');
            });
        });
    } );
    test.it( 'shows the title', function() {
        driver.findElement(By.tagName('p')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('Look for a bike!');
            });
        });
    } );

    test.it( 'displays the bikes', function() {
        var bikes = driver.findElements(By.tagName('tr'));
        bikes
            .then(function( elements ) {
                return elements[0].findElement(By.name('gender'));
            })
            .then(function(element) {
                return element.getText();
            })
            .then(function(text) {
                expect(text).to.equal('M');
            } );
        bikes
            .then( function( elements ) {
                return elements[1].findElement(By.name('gender'));
            })
            .then(function(element) {
                return element.getText();
            })
            .then(function(text) {
                expect(text).to.equal('V');
            } );           
    } );

    test.afterEach( function() {
        driver.manage().deleteAllCookies() ;
    } );
 
    test.after(function() {
        driver.quit();
    });
});


