// function welcomeMessage(name,greetHandler){
//     console.log(name);
//     greetHandler(name);
// };
// // const name = ['Tom Hank', 'TOM brafy'];
// function greetMorning(name){
//     console.log('Greet Morning',name);
// };
// function greetAfternoon(sakib){
//     console.log('geat afternoon',sakib)
// }

// welcomeMessage('Tom Hank',greetMorning);
// welcomeMessage('sakib Khan',greetAfternoon);
// welcomeMessage('Al Hasan',greetMorning);


function welcome(name,address){
    console.log('Good Morning',name);
    address(name);
}
function address (saklain){
    console.log(saklain,'lives in Pabna');
}

welcome('Saklain', address);

function group( name , students){
    console.log('This is',name);
    students(name);
}
function student(mustak){
    console.log(mustak, 'is preaparing his BCS');
}
group('Mustak',student);

function peoples( name, teams){
    console.log(name);
    teams(name);
}
function teamMeamber(saklain){
    console.log(saklain,'is a bad boy');
}
peoples('saklain',teamMeamber);