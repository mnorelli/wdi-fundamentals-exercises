var x = 0;
var result;
/* YOUR CODE HERE */
if (((x%3)===0)&&((x%5)===0)) {var result = 'fizzbuzz'}
else if ((x%3)===0) {var result = 'fizz'}
else if ((x%5)===0) {var result = 'buzz'}
else var result = x;
console.log(result);