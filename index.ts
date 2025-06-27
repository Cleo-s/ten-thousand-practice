const text = 'Hello, World - .1234+ _';

// const regexp = /[0-9]+[a-z]*/ig;
// const regexp = /[^a-z\s,-.+_]+/ig;
const regexp = /\w+/g;

console.log(text.match(regexp));