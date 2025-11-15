//-----------------------------------------------------TASK 1-----------------------------------------------------//

type HTTPSuccess = {
    status: 'success';
    data: string;
}

type HTPPError = {
    status: 'error';
    message: string;
}

type UnionResponseType = HTTPSuccess | HTPPError;

const response: UnionResponseType = {
    status: 'success',
    data: 'Codenames: alfa, bravo, everest',
}

function httpResponseTracker(res: UnionResponseType): string {
    return res.status === 'success' ? res.data.toUpperCase() : `Error: ${res.message}`;
}

console.log(httpResponseTracker(response));

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