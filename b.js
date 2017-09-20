const str = 'Khoa Pham  Training';

console.log(str.substr(5, 4));
console.log(str.substring(5, 9));
console.log(str.slice(5, 9));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.split(' '));
const arrStr = ['Khoa', 'Pham', 'Training'];
console.log(arrStr.join(' '));

const rawStr =` 
  aaa  `;

console.log(rawStr.trim());