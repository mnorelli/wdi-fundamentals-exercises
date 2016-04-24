function sayHello(name) {
  return "Hello, "+name;
}
function areBothEven(a,b) {
  if ((a%2===0)&&(b%2===0)) {return true;}
  else return false;
}
function hotOrNot(temp) {
  if (temp > 75) {return "hot";}
  else return "not hot";
}
function threeIfNull(num) {
  if (num===null) {return 3;}
  else return num;
}
function greatest(x,y,z) {
  if ((x>y)&&(x>z)) {return x;}
  else if ((y>x)&&(y>z)) {return y;}
  else if ((z>x)&&(z>y)) {return z;}
}

