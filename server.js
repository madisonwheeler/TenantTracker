// modules =================================================

var express        = require('express');
var app            = express();
var http = require('http').Server(app);
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');

var mysql = require('mysql');

var mysql2 = require('mysql2');

const Sequelize = require('sequelize');
const SequelizeAuto = require('sequelize-auto');

// configuration ===========================================
	
// var db = require('./config/db');
var port = process.env.PORT || 8080; // set our port

// mongoose.connect(db.url)
//     .then(() =>  console.log('connection succesful'))
//     .catch((err) => console.error(err));

var models = require('./app/models');
models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
 });

 
app.use(express.static(__dirname + '/public')); 		    // set the static files location /public/img will be /img for users

app.use(morgan('dev'));                                        	    // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));                // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                         // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));     // parse application/vnd.api+json as json
app.use(methodOverride());

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

//used to create .js file in /models

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

// auto.run(function (err) {
//   if (err) throw err;

//   console.log(auto.tables); // table list
//   console.log(auto.foreignKeys); // foreign key list
// });


// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user

exports = module.exports = app; 				// expose app
