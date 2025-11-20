type User = {
    id: number;
    name: string;
    email?: string;
    password: string;
}

type OrderType = {
    id: number;
    status: UnionOrderStatusType;
    total: number;
    comment?: string;
}

type UserUpdate = Partial<User>;
type FullUser = Required<User>;
type UserAdd = Pick<User, 'id' | 'name' | 'email'>;
type SecureUser = Omit<User, 'password'>

const patch: UserUpdate = {name: 'Vlad'};
console.log(patch);

const strict: FullUser = {id: 1, name: 'Misha', email: '123@example.com', password: '123'};
console.log(strict);

const publicUser: UserAdd = {id: 2, name: 'Vlad', email: '456@example.com'};
console.log(publicUser);

const secured: SecureUser = {id: 3, name: 'Misha', email: '789@example.com'};
console.log(secured);

type UnionOrderStatusType = 'new' | 'in_progress' | 'done' | 'cancelled';
type OrderTypeMap = Record<UnionOrderStatusType, OrderType[]>;
type OrderUpdate = Omit<OrderType, 'id'>;
type FlexibleOrderType = Partial<OrderUpdate>;

const orderByStatus: OrderTypeMap = {
    new: [{id: 1, status: 'new', total: 50}], 
    in_progress: [], 
    done: [], 
    cancelled: []
};
console.log(orderByStatus);

const orderUpdate: OrderUpdate = {status: 'done', comment: 'all good', total: 20};
console.log(orderUpdate);