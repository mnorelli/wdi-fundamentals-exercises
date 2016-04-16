function sayHello(name) {
    return "Hello, "+name;
}
function areBothEven(a,b) {
    return (a % 2 === 0) && (b % 2 === 0);
}
function hotOrNot(temp) {
    if (temp > 75) {
        return "hot";
    } else return "not hot";
    }

function threeIfNull(num) {
    if (num) {
        return num;
    } else return 3;
}

function greatest(x,y,z) {
    return Math.max(x,y,z);
}

//console.log(sayHello("Jim"))
//console.log(areBothEven(0,2))
//console.log(hotOrNot(-76))
//console.log(threeIfNull(-76))
console.log(greatest(-10,-50,-6))