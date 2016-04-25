var cups = [];
for (n=1;n<11;n+=1) {
    cups.push(n);
}

var ounces = [];

function convertToOunces() {
    for (c=0;c<cups.length;c+=1) {
        ounces.push(cups[c]*8);
    }
    return ounces;
}

var scores = [83, 40, 55, 72, 59, 88, 99];

function passOrFail() {
    for (i=0;i<scores.length;i+=1) {
        if (scores[i]>=60) {scores[i]='pass'}
        else {scores[i]='fail'}
    }
    return scores;
}