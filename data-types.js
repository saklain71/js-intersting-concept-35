let a = 10;
let b = a;
console.log(a, b);
a = 'gelo';
console.log(a,b);

//non promitive
const x = { job: 'web Developer'}
const y = x;
console.log(x,y);
x.job = 'front end developer';
console.log(x,y); 