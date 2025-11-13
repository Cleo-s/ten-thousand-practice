type User = {
    name: string,
    age: number
};

const user: User = {
    name: 'Misha',
    age: 21
}

function printUser(user: User): string {
    return user.name;
}

console.log(printUser(user))

type calculator = {
    add: (a: number, b: number) => number;
    substract: (a: number, b: number) => number; 
}

const calc: calculator = {
    add(a, b) {
        return a + b;
    },
    substract(a, b) {
        return a - b;
    }
}

console.log(calc.add(10, 3));
console.log(calc.substract(7, 4));
