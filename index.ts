const text = 'Hello, hello, World, world- .1234+ _';

const solution1 = /\d+/g;
const solution2 = /[^A-Z0-9\s,.-_+]+/g;
const solution3 = /[^a-zA-Z0-9\s]+/g;

console.log(text.match(solution2));