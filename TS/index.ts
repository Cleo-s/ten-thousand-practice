//-----------------------------------------------------TASK 1-----------------------------------------------------//

type User = {
    id: number;
    name: string;
    email?: string;
    readonly isAdmin: boolean; 
}

const admin: User = {
    id: 1,
    name: 'Misha',
    email: '123@test.com',
    isAdmin: true,
}

//admin.isAdmin = false; //  <--------------------- error;

console.log(admin);

//-----------------------------------------------------TASK 2-----------------------------------------------------//

type Profile = {
    id: number;
    user: User;
    settings: {
        theme: 'light' | 'dark'; 
        language: 'uk' | 'en'; 
    }
}

const profile: Profile = {
    id: 2,
    user: admin,
    settings: { theme: 'light', language: 'uk'}
}

//profile.settings.theme = 'blue'; //  <--------------------- error;

console.log(profile);

//-----------------------------------------------------TASK 3-----------------------------------------------------//

const scores: number[] = [10, 20, 30];
const names: string[] = ['Vlad', 'Misha'];

const users: User[] = [
    {id: 1, name: 'Bodya', isAdmin: false},
    {id: 2, name: 'Misha', isAdmin: true},
    {id: 3, name: 'Vladik', isAdmin: false},
];

console.log(users);

//-----------------------------------------------------TASK 4-----------------------------------------------------//

type Point = {
    x: number;
    y: number;
}

const path: Point[] = [
    {x: 123.6545, y: 654.9783}, 
    {x: 645.1534, y: 354.8762}, 
    {x: 765.2325, y: 856.0943}
];

function logPath(points: Point[]): void {
    const coords = points.forEach((el) => {
        console.log(el.x, el.y);
    })
    return coords;
}

logPath(path);

//-----------------------------------------------------TASK 5-----------------------------------------------------//

type fetchNumberReturn = ReturnType<typeof fetchNumber>;
type fetcedNumber = Awaited<fetchNumberReturn>;

async function fetchNumber(): Promise<number> {
    return 42;
}

async function testFetchType(): Promise<number> {
    const n: fetcedNumber = await fetchNumber();
    console.log(n);
    return n;
}

testFetchType();

//-----------------------------------------------------TASK 6-----------------------------------------------------//

function delayPromiseTest<T>(value: T, ms: number): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), ms)
    });
}

async function testDelayPromise() {
    const response = await delayPromiseTest<User>(
        {id: 1, name: 'Vladik', email: '', isAdmin: false}, 
    500);
    console.log(response);
}

testDelayPromise();