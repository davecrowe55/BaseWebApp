require('dotenv').config();
var express = require('express');
var app = express();
var firebase = require('firebase/app');
// var firebaseui = require('firebaseui');
var firebaseauth = require('firebaseauth');
const firebaseAuth = require("./js/main");
// Initialize the FirebaseUI Widget using Firebase.


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code
