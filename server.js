// modules =================================================

var express        = require('express');
var app            = express();
var http = require('http').Server(app);
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');

//use mysql for the databases
var mysql = require('mysql');
var mysql2 = require('mysql2');

//use sequelize to convert databases to JSON objects
const Sequelize = require('sequelize');
const SequelizeAuto = require('sequelize-auto');

// configuration ===========================================

// set our port
var port = process.env.PORT || 8080;

//check that the database is properly connected to the models
var models = require('./app/models');
models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
 });

// set the static files location
app.use(express.static(__dirname + '/public'));

// log every request to the console
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({'extended':'true'}));
// parse application/json
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// routes ==================================================
// pass our application into our routes
require('./app/routes')(app);

//used to create .js file in /models -> to be used in future
// var auto = new SequelizeAuto('tenantTracker', 'root', 'strongpass', {
//     host: "tenanttracker.cma6st4fitis.us-east-2.rds.amazonaws.com",
//     dialect: 'mysql',
//     directory: "./app/models", // prevents the program from writing to disk
//     port: '3306',
//     additional: {
//         timestamps: false
//         //...
//     }
// });
//
// auto.run(function (err) {
//   if (err) throw err;
//
//   console.log(auto.tables); // table list
//   console.log(auto.foreignKeys); // foreign key list
// });


// start app ===============================================
app.listen(port);
// shoutout to the user
console.log('Magic happens on port ' + port);
// expose app
exports = module.exports = app;
