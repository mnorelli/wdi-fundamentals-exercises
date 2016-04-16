var x;
var result;

function fizzbuzz(x) {
    for (i=1;i<=x;i+=1) {
        console.log(check(i));
    }
}

function check(x) {
    if (both(x)) {
    return "fizzbuzz";
} else if (fizz(x)) {
    return "fizz";
} else if (buzz(x)) {
    return "buzz";
} else return x;
}

function both(x) {
    return fizz(x) && buzz(x);
}

function buzz(x) {
    return (x % 5 === 0);
}

function fizz(x) {
    return (x % 3 === 0);
}

fizzbuzz(15);

/*  From CodeAcademy
for (var i = 1; i < 21; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        if (i % 3 === 0  && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0 ) console.log("Fizz");
        else if (i % 5 === 0 ) console.log("Buzz");
    }
    else console.log(i);
}
*/
