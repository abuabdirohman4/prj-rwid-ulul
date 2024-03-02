// deklarasi
function sayHello(){
    console.log('Hello')
}

// memanggil
sayHello();

// deklarasi dengan parameter dan return value
function sayHello(firstName, lastName){
    console.log(`Hello ${firstName} ${lastName}`);
}

// memanggil dan menyimpan dalam variable
// const result = sayHello('Abu', 'Abdirohman');
// console.log(result)


function getScore(value) {
    if (value > 90) {
        return 'A';
    } else if (value > 80) {
        return 'B';
    } else if (value > 70) {
        return 'C';
    } else if (value > 60) {
        return 'D';
    } else {
        return 'E';
    }
}

function isContains(array, searchVal) {
    for (const element of array) {
        if (element === searchVal) {
            return true;
        }
    }
    return false
}

console.log(isContains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))


function sayHello(firstName, middleName, lastName){
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

sayHello('Abu');
sayHello('', '', 'Abdirohman');


function register(name, gender = "Unknown") {
    console.log(name);
    console.log(gender);
}

register("Abu", 'Male')
register("Abdirohman")

// deklarasi dengan parameter dan return value
function sayHello(firstName, lastName){
    const hello = `Hello ${firstName} ${lastName}`;
    return hello;
}

// memanggil dan menyimpan dalam variable
const result = sayHello('Abu', 'Abdirohman');
console.log(result)