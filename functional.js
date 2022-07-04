let person = {};

person.name = "Mr. Jacob";

console.log(person.name); // Mr Jacob
console.log(person); // { name: 'Mr. Jacob' }

// Array.prototype.forEach()

const array1 = ["1", "2", "3"];
array1.forEach((x) => console.log(x + 1)); // 11, 21, 31

// Array.prototype.map)

const array2 = [1, 2, 3, 4, 5];
mapping = array2.map((x) => x * 2);
console.log(mapping); // [ 2, 4, 6, 8, 10 ]

// Array.prototype.filter()
const array3 = [1, 2, 4, 5, 23];
filtering = array3.filter((x) => x > 12);
console.log(filtering); // 23
