function welcome(name = 'Guest') {
    return `Welcome, ${name}`;
}

console.log(welcome());

function makeCounter() {
    let n = 0;
    function incrementCount() {
        return ++n;
    }
    return incrementCount;
}

const count = makeCounter();

console.log(count());
console.log(count());
console.log(count());
console.log(count());