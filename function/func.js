// / deklarasi dengan parameter dan return value
function sayHello(firstName, lastName){
   console.log(`Hello ${firstName} ${lastName}`);
}

// // memanggil dan menyimpan dalam variable
sayHello("Abu", "Abdirohman");

sayHello("Ulul", "Fadhli");


function luasPersegi(panjang, lebar) {
    let luas = panjang * lebar;
    return luas;
}

// menghasilkan luas kolam renang
let panjangKolam = 100;
let lebarKolam = 20;

let luasKolamRenang = luasPersegi(panjangKolam, lebarKolam);
let luasTanah = luasPersegi(100, 30);

console.log(luasKolamRenang)
console.log(luasTanah)