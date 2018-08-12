var expect = require('chai').expect;
var mongoose = require('mongoose');
var jobController=require('./jobController')
var job=require('../models/Job');


var dbURI = 'mongodb://localhost/jobquery';

// The `clearDB` helper function, when invoked, will clear the database
var clearDB = function (done) {
  mongoose.connection.collections['jobs'].remove(done);
};

describe('Job Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  beforeEach(function (done) {
    clearDB(function () {
      // TODO: Seed database with some jobs to run tests against. 

    
    });
  });

  // TODO: Write your tests for jobController here

  it('should have a create method', function (done) {
   
   jobController.createJob('','done'  )
    expect(function(){}).to.exist();
//i will back 
   
  });)
  
  });
 
});
