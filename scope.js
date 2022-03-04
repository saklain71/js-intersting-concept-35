/*  scope is a kind of limitation
    we can use gloabal scope from loacal scop
    but loacl scope can't be used in globally
 */

    // let and const block scope . no hoisting here
    // var use to declare globally , automatically
    

    // if we use var this is not block scope;
const favNum = 27; // this is global scope
function add(first ,second){
    const result = first + second;
    console.log(mood); // hoisting
    if(result > 9 ){
       var mood = 'haappy'; // special case , not block scope
       mood = ' cranky';
    }
    // const mood = 'happy'; // ekhane declare kora jabena
    console.log(favNum);
    console.log(mood);
    return result; // 'result' is loacal scope in func
}

const sum = add(11,33);

// console.log(first);   --- no scope


for(var i = 0; i < 10 ; i++){

}
console.log(i);
for(let i = 0; i < 10 ; i++){

}
// console.log(i); no output 