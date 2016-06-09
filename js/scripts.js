// JavaScript/jQuery Business Logic



var romanNumerals =["M", "CM", "DM", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function convert(inputNumber) {

};

// JavaScript/jQuery Front-End Logic
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var inputNumber = $("form#converter").val();
    if (inputNumber <= 0) {
      alert("number must be greater than 0");
    };
    
    //call function
  });
});
