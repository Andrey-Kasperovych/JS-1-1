// let elementWidth = `25px`;
// Number.parseInt(elementWidth);
// const resualt = Number.parseInt(elementWidth);
// elementWidth = Number.parseInt(elementWidth);
// console.log(`elementWidth:`, elementWidth);
// console.log(resualt);
// console.log(typeof elementWidth);
// console.log(typeof resualt);

// let elementHeight = `12.12px`;
// elementHeight = Number.parseFloat(elementHeight);
// console.log(`elementHeight:`, elementHeight);
// console.log(typeof elementHeight);

// let salary = 1200.1234567;
// salary = Number(salary.toFixed(3));
// console.log(salary);
// console.log(typeof salary);

// let quantity = `30f`;
// let value = `Эту строку невозможно привести к числу`;

// console.log(Number.parseFloat(quantity));
// console.log(Number(value));
// console.log(Number.parseInt(value));
// console.log(5 / 0);

// console.log(Math);

// const a = 3;
// const b = 4;
// const result = Math.pow(a, b);

// console.log(result);
// console.log(a ** b);

// let base = prompt(`Введите число`);
// base = Number(base);
// console.log(base);

// let power = prompt(`Введите степень`);
// power = Number(power);
// console.log(power);

// // const resualt = Math.pow(base, power);
// const resualt = base ** power;

// console.log(resualt);

const max = 10;
const min = 5;

const resualt = Math.round(Math.random() * (max - min) + min);

console.log(Math.round(Math.random() * (max - min) + min));

console.log(resualt);

const num = 20;
const result = true && 5 > 3 && 'javascript';
console.log(result); // true
