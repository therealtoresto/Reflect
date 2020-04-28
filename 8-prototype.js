`use strict`

const person1 = { name: 'Taras Bondaruk' };
const person2 = { name: 'Taras Bondaruk' };

class Person {}

const success1 = Reflect.setPrototypeOf(person1, Person.prototype); //return success(bool)
const success2 = Object.setPrototypeOf(person2, Person.prototype);  //return Object(person)

console.dir({ person1, success1 });
console.dir({ person2, success2 });

//const proto1 = Object. getPrototypeOf(person);

const proto1 = Reflect.getPrototypeOf(person1);
const proto2 = Reflect.getPrototypeOf(proto1);
const proto3 = Reflect.getPrototypeOf(proto2);

console.dir({ proto1, proto2, proto3 })