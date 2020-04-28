`use strict`

const person = { name: 'Taras Bondaruk' };

Reflect.defineProperty(person, 'born', {
    value: 1997,
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(person, 'city', {
    value: 'Kyiv',
    writable: false,
    enumerable: false,
    configurable: false,
});

person.born = 7991;
// person.city = 'Roma';

console.dir({ person });
