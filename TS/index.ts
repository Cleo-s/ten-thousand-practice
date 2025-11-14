//-----------------------------------------------------TASK 1-----------------------------------------------------//

function printId(id: string | number): number | string {
    return typeof(id) === 'string' ? id.toUpperCase() : id;
}

console.log(printId(1));

//-----------------------------------------------------TASK 2-----------------------------------------------------//

type Circle = {
    type: 'circle';
    radius: number;
}

type Square = {
    type: 'square',
    size: number
}

type UnionType = Circle | Square;

function findP(obj: UnionType): number {
    return obj.type === 'circle' ? Math.PI * obj.radius ** 2 : obj.size * obj.size; 
}

const shape: UnionType = {
    type: 'square',
    size: 2,
}

console.log(findP(shape));

//-----------------------------------------------------TASK 3-----------------------------------------------------//


type User = {
    name: string;
    age: number;
}

function isUser(x: any): x is User {
    return x && typeof x.name === 'string' && typeof x.age === 'number';
}