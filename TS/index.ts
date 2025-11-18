function fakeFetch(message: string, delay: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

async function fetchUserName(): Promise<string> {
    const name = await fakeFetch('Vlad', 500);
    return typeof(name);
}

console.log(fetchUserName());

type fetchUserNameReturn = ReturnType<typeof fetchUserName>;
type UserName = Awaited<fetchUserNameReturn>;

async function test(): Promise<string> {
    const testResponse: UserName= await fetchUserName();
    return typeof(testResponse);
}

console.log(test());

function ultimateDelay<T>(value: T, ms: number): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() =>  resolve(value), ms);
    });
}

type User = {
    id: number;
    name: string;
}

async function demo() {
    const user = await ultimateDelay<User>({id: 1, name: 'Vladik'}, 1000);
    const id = user.id;
    const name = user.name;

    return console.log('Delayed User: ', id, name );
}

type DelayedUserPromise = ReturnType<typeof ultimateDelay<User>>
type DelayedUser = Awaited<DelayedUserPromise>;

const someUser: DelayedUser = {
    id: 2,
    name: 'Misha',
} 

// type ApiResponse<T> = 
// { status: '200'; data: T; } | { status: '500'; error: string }

// async function getUser(): Promise<ApiResponse<User>> {

// }