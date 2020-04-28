`use strict`

const person = { name: 'Taras Bondaruk', born: 1997 };
const persons = [person];

console.dir({
    ownKeys: {
        person: Reflect.ownKeys(person),  
        persons: Reflect.ownKeys(persons),
    }
});