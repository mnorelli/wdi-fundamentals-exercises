var result;
var max = 15;
/* YOUR CODE HERE */
for (x=1;x<=max;x+=1) {
    if (((x%3)===0)&&((x%5)===0)) {var result = 'fizzbuzz';}
    else if ((x%3)===0) {var result = 'fizz';}
    else if ((x%5)===0) {var result = 'buzz';}
    else var result = x;
    console.log(result);
}

