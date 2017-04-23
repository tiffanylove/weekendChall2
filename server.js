//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//globals
var port = 5000;
var newArray = [];

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

//spin up server
app.listen(port, function(){
  console.log('listening on port 5000');
});

//base url
app.get('/', function(req,res){
  console.log('base url hit');
  //send back index.html as a response
  res.sendFile(path.resolve('public/views/index.html'));

});
