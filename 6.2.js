var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];

var newArray1 = [];
for (i=0;i<oldArray.length;i+=1) {
    newArray1.push(oldArray[i]+5);
}

var newArray2 = [];
for (i=0;i<oldArray.length;i+=1) {
    newArray2.push(Math.pow(oldArray[i],2));
}

var newArray3 = [];
for (i=0;i<oldArray.length;i+=1) {
    if (i%2===0) newArray3.push(oldArray[i]);
    else newArray3.push(oldArray[i]*2);
}

var newArray4 = [];
for (i=oldArray.length-1;0<=i;i-=1) {
    newArray4.push(oldArray[i]);
}
