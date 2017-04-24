var express = require('express');
var router = express.Router();

//globals

router.post('/add', function(req,res){
  var data = req.body;
  var response = {};

  var result = add(parseInt(data.firstNum), parseInt(data.secondNum));
  response.result = result;
  res.send(response);

});

router.post('/subtract', function(req,res){
  var data = req.body;
  var response = {};

  var result = subtract(parseInt(data.firstNum), parseInt(data.secondNum));
  response.result = result;
  res.send(response);

});

router.post('/multiply', function(req,res){
  var data = req.body;
  var response = {};

  var result = (parseInt(data.firstNum) * parseInt(data.secondNum));
  response.result = result;
  res.send(response);

});

router.post('/divide', function(req,res){
  var data = req.body;
  var response = {};

  var result = (parseInt(data.firstNum) / parseInt(data.secondNum));
  response.result = result;
  res.send(response);

});

router.get('/', function(req, res) {
  res.send();
});


//This could be a switch statement

 function add(firstNum, secondNum){
   return firstNum + secondNum;

 }

 function subtract(firstNum, secondNum){
   return firstNum - secondNum;
 }

 function multiply(firstNum, secondNum){
   return firstNum * secondNum;
 }
 function divide(firstNum, secondNum){
   return firstNum / secondNum;
 }




module.exports = router;
