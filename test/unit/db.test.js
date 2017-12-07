//==============MODEL -> DATABASE UNIT TESTS==================

//run using nodeunit test/unit/db.test.js

// Import the mock library
var SequelizeMock = require('sequelize-mock');

// Setup the mock database connection
var DBConnectionMock = new SequelizeMock();

// Define our Mocked User Model
var UserMock = DBConnectionMock.define('users', {
  'id': 45,
  'username': 'bobvance',
  'password': 'strongpass',
  'name': 'Bob Vance',
  'phone_number': '9782221111',
  'email': 'bobvance@vancerefigeration.com',
  'user_type': 'landlord',
  'landlord_id': 5,
  'property_id': 21,
    }, {
        instanceMethods: {
            myTestFunc: function () {
                return 'Test User';
            },
        },
    });

// Define our Mocked Rent Model
var RentMock = DBConnectionMock.define('Rent', {
  'id': 45,
  'date': '12/01/17',
  'landlord_status': 'Received',
  'tenant_status': 'Sent',
  'property_id': 21,
    }, {
        instanceMethods: {
            myTestFunc: function () {
                return 'Test Rent';
            },
        },
    });

// Define our Mocked Property Model
var PropertyMock = DBConnectionMock.define('Property', {
        'id': 21,
        'address': '21 Oak Lane, Grander, CA',
        'landlord_id': 5,
    }, {
        instanceMethods: {
            myTestFunc: function () {
                return 'Test Property';
            },
        },
    });

// Define our Mocked Appliance Model
var ApplianceMock = DBConnectionMock.define('Appliance', {
  'id': 7,
  'name': 'Washing Machine #1',
  'status': 'Good',
  'repair_desc': '',
  'property_id': 21,
    }, {
        instanceMethods: {
            myTestFunc: function () {
                return 'Test Appliance';
            },
        },
    });

// From there we can start using it like a normal model
UserMock.findOne({
    where: {
        username: 'bobvance',
    },
}).then(function (user) {
    // `User` is a Sequelize Model-like object
    user.get('id');
    user.get('email');
    user.get('username');

    // Will test and return 'Test User' as defined above
    user.myTestFunc();

    // Tests the `UserGroupMock` object
    user.getGroup();  
});

// From there we can start using it like a normal model
RentMock.findOne({
    where: {
        id: 45,
    },
}).then(function (rent) {
    // `rent` is a Sequelize Model-like object
    rent.get('landlord_status');
    rent.get('tenant_status');
    rent.get('name');

    // Will test and return 'Test Rent' as defined above
    rent.myTestFunc();

    // Tests the `RentGroupMock` object
    rent.getGroup();
});

// From there we can start using it like a normal model
ApplianceMock.findOne({
    where: {
        id: 21,
    },
}).then(function (appliance) {
    // `appliance` is a Sequelize Model-like object
    appliance.get('name');
    appliance.get('status');
    appliance.get('repair_desc');

    // Will test and return 'Test Appliance' as defined above
    appliance.myTestFunc();

    // Tests the `ApplianceGroupMock` object
    appliance.getGroup();
});

// From there we can start using it like a normal model
PropertyMock.findOne({
    where: {
        id: 21,
    },
}).then(function (property) {
    // `appliance` is a Sequelize Model-like object
    property.get('landlord_id');
    property.get('status');

    // Will test and return 'Test Property' as defined above
    property.myTestFunc();

    // Tests the `PropertyGroupMock` object
    property.getGroup();
});
