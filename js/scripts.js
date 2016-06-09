// JavaScript/jQuery Business Logic


var converter = function convert(inputNumber) {
  debugger;
  var romanNumerals =["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman ="";
  for( var i = 0; i<numbers.length; i++) {
    while(inputNumber >= numbers[i]) {
      roman = roman + romanNumerals[i];
      inputNumber = inputNumber - numbers[i];
    }
  }
  return roman;
};

// JavaScript/jQuery Front-End Logic
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var inputNumber = $("input#input-number").val();

    if (inputNumber <= 0 || inputNumber >= 4000) {
      alert("number must a value between 1 and 3999");
    }
    //call function
    converter(inputNumber);

    //add output
  });
});
