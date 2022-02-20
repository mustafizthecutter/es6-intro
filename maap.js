const numbers = [4, 6, 8, 10];
const output2 = [];
// function doubleOld(number) {
//     return number * 2;
// }
// const doubleIt = number => number * 2;
// for (const number of numbers) {
//     const result = doubleIt(number);
//     output2.push(result);
// }
// console.log(output2);
const output = numbers.map(x => x * 2);
const square = numbers.map(x => x * x);
console.log(square);
// const output = numbers.map(number => number * 2);
// const output = numbers.map(doubleIt);
// console.log(output);