var db = require('../../app/models');
var User = db.User;

'use strict';
var expect = require('expect.js');

//Test that the User routes connect to the database
describe('models/User', function () {
  before(function () {
    //requires a proper database connection before test begins
    return require('../../app/models').sequelize.sync();
  });

  beforeEach(function () {
    //checks validity of User model
    this.User = require('../../app/models').User;
  });

  describe('create', function () {
    //calls test script in package
    it('Tests creation of a User', function () {});
  });
});

//test that the Rent routes connect to the database
describe('models/Rent', function () {
  before(function () {
    //requires a proper database connection before test begins
    return require('../../app/models').sequelize.sync();
  });

  beforeEach(function () {
    //checks validity of Rent model
    this.Rent = require('../../app/models').Rent;
  });

  describe('create', function () {
    //calls test script in package
    it('Tests creation of a Rent Payment', function () {});
  });
});

//test that the Appliance routes connect to the database
describe('models/Appliance', function () {
  before(function () {
    //requires a proper database connection before test begins
    return require('../../app/models').sequelize.sync();
  });

  beforeEach(function () {
    //checks validity of Appliance model
    this.User = require('../../app/models').User;
  });

  describe('create', function () {
    //calls test script in package
    it('Tests creation of an Appliance', function () {});
  });
});

//test that the Property routes connect to the database
describe('models/Property', function () {
  before(function () {
    //requires a proper database connection before test begins
    return require('../../app/models').sequelize.sync();
  });

  beforeEach(function () {
    //checks validity of Property model
    this.User = require('../../app/models').User;
  });

  describe('create', function () {
    //calls test script in package
    it('Tests creation of a Property', function () {});
  });
});

//test that the Index homepage routes connect to the database
describe('models/index', function () {
  before(function () {
    //requires a proper database connection before test begins
    return require('../../app/models').sequelize.sync();
  });

  beforeEach(function () {
    //checks validity of Index model
    this.Index = require('../../app/models').Index;
  });

  describe('create', function () {
    //calls test script in package
    it('Tests creation of index', function () {});
  });
});
