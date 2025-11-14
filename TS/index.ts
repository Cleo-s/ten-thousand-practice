type User1 = {
    name: string,
    age: number
};

const user: User1 = {
    name: 'Misha',
    age: 21
}

function printUser(user: User1): string {
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

type User = {
    name: string;
    age: number;
    sayHi: () => string;
    setName: (newName: string) => void;
    addAge: () => void;
}

const newUser: User = {
    name: 'Misha',
    age: 21,
    sayHi() {
        return `Hi, ${this.name}`;
    },
    setName(newName) {
        return this.name = newName;
    },
    addAge() {
        return this.age + 1;
    }
}

console.log(newUser.age)
console.log(newUser.addAge())
console.log(newUser.age)
console.log(newUser.sayHi())
console.log(newUser.name)
console.log(newUser.setName('Vlad'))
console.log(newUser.name)
console.log(newUser.sayHi())