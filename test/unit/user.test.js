//==============ROUTE / API CALL UNIT TESTS==================

// run tests by using 'npm test'

var db = require('../../app/models');
var User = db.User;
var app      = require('../../app/routes.js');
var Bluebird = require('bluebird');
var expect   = require('expect.js');
var request  = require('supertest');

'use strict';
var expect = require('expect.js');


//Test API Calls & Routes
describe('../../app/routes.js', function () {
  before(function () {
    //requires a proper database connection before test begins
    return require('../../app/models').sequelize.sync();
  });

  beforeEach(function () {
    //checks validity of User model
    this.User = require('../../app/models').User;
  });


  //==============LOGIN API CALL UNIT TESTS==================
  describe('StartApp', function (done) {
    //calls test script in package
    it('Test app start', function () {
      request(app).get('/').expect(200, done);
    });
  });

  describe('UserLoginRoute', function (done) {
    //calls test script in package
    it('Test user login', function () {
      request(app).get('/api/login').expect(200, done);
    });
  });

  //==============APPLIANCE API CALL UNIT TESTS==================

  describe('ViewApplianceRoute', function (done) {
    //calls test script in package
    it('Test appliance page route', function () {
      request(app).get('/api/appliance').expect(200, done);
    });
  });

  describe('AddApplianceRoute', function (done) {
    //calls test script in package
    it('Test adding appliance route', function () {
      request(app).get('/api/appliance/add').expect(200, done);
    });
  });

    describe('UpdateApplianceRoute', function (done) {
    //calls test script in package
    it('Test updating appliance information route', function () {
      request(app).get('/api/appliance/update').expect(200, done);
    });
  });

  describe('FixApplianceRoute', function (done) {
    //calls test script in package
    it('Test setting appliance fix status route', function () {
      request(app).get('/api/appliance/fix').expect(200, done);
    });
  });

  //==============LANDLORD PROPERTY HOMEPAGE API CALL UNIT TESTS==================

  describe('LandlordProperty', function (done) {
    //calls test script in package
    it('Test property get route', function () {
      request(app).get('/api/landlord/property').expect(200, done);
    });
  });

  describe('PropertyTenantView', function (done) {
    //calls test script in package
    it('Test property tenant list route', function () {
      request(app).get('/api/landlord/tenants').expect(200, done);
    });
  });

    describe('PropertyApplianceCount', function (done) {
    //calls test script in package
    it('Test property appliance count route', function () {
      request(app).get('/api/landlord/applianceCount').expect(200, done);
    });
  });

  //==============TENANT PROPERTY HOMEPAGE API CALL UNIT TESTS==================

  describe('TenantProperty', function (done) {
    //calls test script in package
    it('Test tenant property get route', function () {
      request(app).get('/api/tenant/property').expect(200, done);
    });
  });

  describe('TenantProperty', function (done) {
    //calls test script in package
    it('Test tenant get landlord route', function () {
      request(app).get('/api/tenant/landlord').expect(200, done);
    });
  });

  //==============RENT PAGE API CALL UNIT TESTS==================

  describe('RentView', function (done) {
    //calls test script in package
    it('Test rent page route', function () {
      request(app).get('/api/rent').expect(200, done);
    });
  });

  describe('AddRentRoute', function (done) {
    //calls test script in package
    it('Test adding rent route', function () {
      request(app).get('/api/rent/add').expect(200, done);
    });
  });

    describe('UpdateRentRoute', function (done) {
    //calls test script in package
    it('Test receive rent route', function () {
      request(app).get('/api/rent/receive').expect(200, done);
    });
  });

  describe('FixApplianceRoute', function (done) {
    //calls test script in package
    it('Test sent rent route', function () {
      request(app).get('/api/rent/send').expect(200, done);
    });
  });

});
