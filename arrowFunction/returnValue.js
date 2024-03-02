// deklarasi dengan block dan return value
const add = (first, second) => {
    return first + second;
};
console.log(add(10, 20));

// deklarasi tanpa block, otomatis return value
const sum = (first, second) => first + second;
console.log(sum(10, 20))
