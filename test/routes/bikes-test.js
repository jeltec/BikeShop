var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );
chai.use(require('chai-things'));
describe('Bikes', function (){
    beforeEach(function(){
        //before each test block, empty the database and refill it with 2 bike objects.
        var database =  [];
        while(database.length > 0) {
            database.pop();
        }
        database.push(
            {id: 1000000, year: 2002, type: 'City bike', brand: 'Test', users: 12,gender: 'M'}
        );
        database.push(
            {id: 1000001, year: 1999, type: 'BMX', brand: 'BMX', users: 1,gender: 'V'}
        );
    });
    describe('GET /bikes', function () {
        it('should return an array with all bikes', function(done) {
            chai.request(server)
                .get('/bikes')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(2);
                    var result = _.map(res.body, function (bike) {
                        return { id: bike.id,
                            year: bike.year };
                    });
                    expect(result).to.include( { id: 1000000, year: 2002  } );
                    expect(result).to.include( { id: 1000001, year: 1999  } );
                    done();
                });

        });
    });
    describe('POST /bikes', function () {
        it('should return confirmation message and update database', function(done) {
            var bike = {
                year: 2008,
                type: 'Test bike',
                brand: 'Minerva',
                users: 0,
                gender: 'V'};
            chai.request(server)
                .post('/bikes')
                .send(bike)
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Bike Added!' ) ;
                    done();
                });
            after(function (done) {
                chai.request(server)
                    .get('/bikes')
                    .end(function(err, res) {
                        var result = _.map(res.body, function (bike) {
                            return {
                                year: bike.year
                            };
                        } );
                        expect(result).to.include( {
                            year: 2008
                        } ); done();
                    });
            });

        });
    });

});