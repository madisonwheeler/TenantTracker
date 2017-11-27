var db = require('../../app/models');
var User = db.User;

'use strict';
var expect = require('expect.js');

describe('models/User', function () {
    before(function () {
        return require('../../app/models').sequelize.sync();
    });

    beforeEach(function () {
       this.User = require('../../app/models').User;
    });

    describe('create', function () {
       	it('Tests creation of a User', function () {
       });
    });
});

describe('models/Rent', function () {
    before(function () {
        return require('../../app/models').sequelize.sync();
    });

    beforeEach(function () {
       this.Rent = require('../../app/models').Rent;
    });

    describe('create', function () {
       	it('Tests creation of a Rent Payment', function () {
       });
    });
});

describe('models/Appliance', function () {
    before(function () {
        return require('../../app/models').sequelize.sync();
    });

    beforeEach(function () {
       this.User = require('../../app/models').User;
    });

    describe('create', function () {
       	it('Tests creation of an Appliance', function () {
       });
    });
});

describe('models/Property', function () {
    before(function () {
        return require('../../app/models').sequelize.sync();
    });

    beforeEach(function () {
       this.User = require('../../app/models').User;
    });

    describe('create', function () {
       	it('Tests creation of a Property', function () {
       });
    });
});

describe('models/index', function () {
    before(function () {
        return require('../../app/models').sequelize.sync();
    });

    beforeEach(function () {
       this.Index = require('../../app/models').Index;
    });

    describe('create', function () {
       	it('Tests creation of index', function () {
       });
    });
});
