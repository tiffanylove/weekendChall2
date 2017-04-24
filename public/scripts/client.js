$(document).ready(function(){

$('#allCalc').on('click', '.buttons', function(){
  var firstNum = $('#firstNum').val();
  var secondNum = $('#secondNum').val();

// console.log($(this).data('action'));
  var action = $(this).data('action');

  calculateAll(firstNum, secondNum, action);
});

$('#allCalc').on('submit', function(event) {

   event.preventDefault();
    });

$('#clear').on('click', clearCalculator);



  });





function calculateAll(a, b, action){
  $.ajax({
    type: "POST",
    url: '/calculator' + action,
    data: {firstNum: a, secondNum: b},
    success: function(response) {
      $('.resContainer').text(response.result);

    }
  });
}
function clearCalculator() {
  $('.resContainer').empty();
  $('#firstNum').val('');
  $('#secondNum').val('');

  console.log('calculator cleared');
}
