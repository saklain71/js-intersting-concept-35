// primitive not primitive can be check == / ===
/* const first = 2;
const second = '2';
if(first == second){
    console.log('true')
}
else{
    console.log('condition false');
}
  */

// not same 
// cant be check by ( object and array) == / === 
// need to through loop
const a = { name : 'ali'};
const b = {name : 'ali'};
if(a == b){
    console.log('same');
}
else{
    console.log('not same');
}

const e = [];
const f = [];
if(e == f){
    console.log('same');
}
else{
    console.log('not same');
}
