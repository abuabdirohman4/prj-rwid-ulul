const buah = ["apel", "jeruk", "mangga"];
// buah.forEach(function(currentValue, index) {
//     console.log(currentValue); // output : 'apel' | 'jeruk' | 'mangga'
//     console.log(index); // output : 0 | 1 | 2
// });
buah.forEach((currentValue, index) => {
    console.log(currentValue); // output : 'apel' | 'jeruk' | 'mangga'
    console.log(index); // output : 0 | 1 | 2
});
// console.log(buah); // output : ['apel', 'jeruk', 'mangga']

const angka = [1, 2, 3, 4];
// const angka = ["apel", "jeruk", "mangga"];
// const profil = ['Abu', "Kendal", "SMA 2"]
// const hasil = angka.forEach((currentValue, index) => currentValue * 2);
// const hasil = angka.map((currentValue, index) => currentValue * 2);
// const hasil = angka.map((currentValue, index) => currentValue.toUpperCase());
const angka2 = angka.map(() => {});

console.log(hasil);

// buah.filter(function(currentValue, index) {
//     console.log(currentValue);
//     console.log(index);
// });
// console.log(buah);

// buah.reduce(function(currentValue, index) {
//     console.log(currentValue);
//     console.log(index);
// });
// console.log(buah);
