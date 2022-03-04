function tripple(x,y,z){
x.age = 100;
// y = 22;
// z= 33;
}

const num1 = 3;
const num2 = 5;
const num3 = 8;
//tripple(num1, num2, num3);
console.log(typeof null);
console.log(num1, num2, num3);
const myObj = {name: 'saklain', age: 26};
tripple(myObj);
console.log(myObj);



/// quiz 
const isTrue='false'; 
if(!isTrue){
console.log('hello');
} else {
console.log('world'); }
//7
function sum(p, q) {
  const x = p + q;
  return x;
 }
 const result = sum(2, 3);
 console.log(result);
 //9
 function work(x, y = 4) {
  return x + y;
 }
 console.log(work(32));