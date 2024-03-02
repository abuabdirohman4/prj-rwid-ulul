// global scope
let counter = 0;

function addCounter(){
    // local scope function
    counter++; // bisa diakses
}

addCounter();
addCounter();

console.log(counter)