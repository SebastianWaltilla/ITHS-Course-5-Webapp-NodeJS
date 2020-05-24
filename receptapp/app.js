var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust = require('dustjs-helpers'),
    pg = require('pg'),
    app = express();

// connection to db string
var conString = "postgres://sebastian:Trustno1@localhost/recepies";

//Assign Dust Engine To .dust Files
app.engine('dust', cons.dust);

// Set .dust as default extension
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
    console.log("test for express");
});
//sever
app.listen(3000, function (){
    console.log('Server started on Port 3000');
});
