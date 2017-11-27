var db = require('../../app/models');
var User = db.User;

// describe('user', function () {
//   it('should load', function (done) {
//     User.create({
//       id: 5, 
//       username: 'test123', 
//       password: 'strongpass', 
//       name: 'bob', 
//       phone_number: '11111111111', 
//       email: 'test@test', 
//       user_type: 'landlord', 
//       landlord_id: 33, 
//       property_id: 21
//     }).then( function (article) {
//       // do some tests on article here
//       done();
//     });
//   });
// });  


//   module.exports = function (sequelize, DataTypes) {

//   var User = sequelize.define('User', {
//     id: DataTypes.INTEGER, 
//     username: DataTypes.STRING, 
//     password: DataTypes.STRING, 
//     name: DataTypes.STRING, 
//     phone_number: DataTypes.STRING, 
//     email: DataTypes.STRING, 
//     user_type: DataTypes.STRING, 
//     landlord_id: DataTypes.INTEGER, 
//     property_id: DataTypes.INTEGER
//   }, {
//     classMethods: {
//       associate: function (models) {
//         // example on how to add relations
//         // Article.hasMany(models.Comments);
//       }
//     }
//   });

//   return User;
// };

// 'use strict';

 var expect = require('expect.js');

 describe('models/User', function () {
    before(function () {
        return require('../../app/models').sequelize.sync();
    });

     beforeEach(function () {
       this.User = require('../../app/models').User;
       this.Rent = require('../../app/models').Rent;
     });

     describe('create', function () {
       it('creates a task', function () {
//       	this.timeout(5000);
//   		setTimeout(done, 300);
//   //      return this.User.create({ id: 5, username: 'test123', password: 'strongpass', name: 'bob', phone_number: '11111111111', email: 'test@test', user_type: 'landlord', landlord_id: 33, property_id: 21 }).bind(this).then(function (user) {
//   // //       return this.Task.create({ title: 'a title', UserId: user.id }).then(function (rent) {
//   //   //       expect(rent.title).to.equal('a title');
//   //     //   });
//   //      });
       });
     });
 });