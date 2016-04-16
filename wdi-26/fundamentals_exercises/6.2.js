var newArray = []
var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];
//Each value in newArray is the square of the value of its corresponding element in oldArray? ([1, 2, 3] becomes [1, 4, 9])
for (i=0;i<oldArray.length;i+=1) {
    (oldArray[i] % 2 === 0) ? newArray.push(oldArray[i]*2) : newArray.push(oldArray[i])
    }

//Every odd-indexed value in newArray is double its corresponding element in oldArray, while every even-indexed value is unchanged? ([3, 4, 5, 2, 6] becomes [3, 8, 5, 4, 6])
for (i=0;i<oldArray.length;i+=1) {
    newArray.push(oldArray[i]*oldArray[i]);
    }

//Each value in newArray is the value of its corresponding element in oldArray, plus 5? ([1, 2, 3] becomes [6, 7, 8])
for (i=0;i<oldArray.length;i+=1) {
    newArray.push(oldArray[i]+5);
    }
    
//newArray is the exact mirror image of oldArray? ([1, 2, 3] becomes [3, 2, 1])
for (i=0;i<oldArray.length;i+=1) {
    newArray.push(oldArray[oldArray.length-1-i])
    }

console.log(newArray)

