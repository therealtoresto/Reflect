`use strict`

const person = { name: 'Taras Bondaruk' };

console.log({ isExtensible: Reflect.isExtensible(person) });
console.log({ success: Reflect.preventExtensions(person) });
//person.city = 'Kyiv'; //TypeError