var findSum = function(firstValue: number, secondValue: number) {
  var sum: number = firstValue + secondValue;
  alert("The sum of your two numbers is: " + sum);
}

var firstNumber = parseInt(prompt('Please enter a number.'));
var secondNumber = parseInt(prompt('Enter another number.'));
findSum(firstNumber, secondNumber);
