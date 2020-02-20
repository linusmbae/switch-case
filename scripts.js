var add= function(number1, number2){
  return number1 + number2
}
var subtract= function(number1, number2){
  return number1 - number2
}
var multiply= function(number1, number2){
  return number1 *number2
}
var divide= function(number1, number2){
  return number1 / number2
}
function calculate(operator, number1, number2){
  switch (operator){
    case '+':
      return add(number1,number2);
    case '-':
      return subtract(number1,number2);
    case '*':
      return multiply(number1,number2);
    case '/':
      return divide(number1,number2);
     
  }
}
calculate('+',4,5);
