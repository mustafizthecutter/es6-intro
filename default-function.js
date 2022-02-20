// function declaration
// function add1(num1, num2) {

//     return num1 + num2;
// }
// const result = add1(15, 17);
// console.log(result);
// // functional expression
// const add2 = function add2(num1, num2) {
//     return num1 + num2;
// }
// const result1 = add2(15, 17);
// console.log(result1);

// // anonymous function
// const add3 = function (num1, num2) {
//     return num1 + num2;
// }
// const result2 = add3(15, 17);
// console.log(result2);

// // arrow function
// const add4 = (num1, num2) => num1 + num2;
// const result3 = add4(15, 17);
// console.log(result3);

// document.getElementById('id-btn').onclick=function handleEventBy(){

// }

// const getFiveTimes = num => num * 5;
// const result = getFiveTimes(5);
// console.log(result);

// const doMath = (x, y) => {
//     const sum = x + y;
//     const diff = x - y;
//     const value = sum * 5;
//     const output = value * 2;
//     return output;
// }
// const total = doMath(6, 3);
// console.log(total);
// const must = () => "robin gay";
// const tanjilChudani = must();
// console.log(tanjilChudani);
// const numbers = [34, 56, 45, 32, 12, 67];
// console.log(numbers, ...numbers);

// const max = Math.max(34, 67, 89, 54, 23, 12);
// const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

// const numbers2 = [90, ...numbers, 88];
// numbers.push(54);
// console.log(numbers2);

// const square = (x) => x * x;
// console.log(square(9));

const mustafiz = { age: 24, address: 'sylhet', ovvash: { food: 'fuchka', habit: { leisure: 'mobile tipa', olosh: 'gan shuna' }, sokh: 'travelling' }, phone: 'o02004959', color: 'black' };
// console.log(mustafiz.age, mustafiz.phone);
// const age = mustafiz.age;
// console.log(age);
// const { phone, color, age } = mustafiz;
// console.log(phone, color, age);
// const { sokh, habit } = mustafiz.ovvash;
// console.log(sokh, habit);
// const { leisure } = mustafiz.ovvash.habit;
// console.log(leisure);
const olosh = mustafiz.ovvash.habit.olosh;
console.log(olosh);