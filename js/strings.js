// const firstName = (x = `Vasya`);
// const lastName = (y = `Pupkin`);
// const numberHotel = (z = 69);
// const type = (q = `VIP`);

// const bron = `Гость ` + x + ` ` + y + ` поселяется в ` + z + ` номер ` + q;

// const bron2 = `Гость ${x + ' ' + y}  поселяется в ${q} номер ${z}`;

// console.log(bron);
// console.log(typeof bron);

// console.log(bron2);
// console.log(typeof bron2);

// const w = 'Что ищем?';
// let brand = prompt(w);
// brand = brand[0].toUpperCase() + brand.toLowerCase().slice(1);

// console.log(brand);

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная РаСпродажа СПАм кампания #fatlivesmatter';

const string1Normalize = string1.toLowerCase();
console.log(string1Normalize.includes(blacklistedWord1));
console.log(string1Normalize.includes(blacklistedWord2));

const string2Normalize = string2.toLowerCase();
console.log(string2Normalize.includes(blacklistedWord1));
console.log(string2Normalize.includes(blacklistedWord2));

const string3Normalize = string3.toLowerCase();
console.log(string3Normalize.includes(blacklistedWord1));
console.log(string3Normalize.includes(blacklistedWord2));
