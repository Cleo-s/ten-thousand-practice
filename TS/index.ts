const points: number = 100;

function CalculatePoints(bonusPoints: number): number {
    return points + bonusPoints;
}

console.log(CalculatePoints(50));

type User = {name: string, age: number}

function showUser(user: User): User {
    return user;
}

const user: User = {name: 'Misha', age: 21};

console.log(showUser(user));