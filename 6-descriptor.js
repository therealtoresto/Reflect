`use strict`

const person = { name: 'Taras Bondaruk', born: 1997 };

const descriptor1 = Reflect.getOwnPropertyDescriptor(person, 'name');
const descriptor2 = Object.getOwnPropertyDescriptor(person, 'name');
const descriptor3 = Reflect.getOwnPropertyDescriptor(person, 'city');
const descriptor4 = Object.getOwnPropertyDescriptor(person, 'city');

console.dir({ descriptor1, descriptor2, descriptor3, descriptor4 })