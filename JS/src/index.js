const users = [
  {id: 1, name: 'Misha', active: true},
  {id: 2, name: 'Vlad', active: false},
  {id: 3, name: 'Bodya', active: true},
]

const userNames = users.map((obj) => obj.name)
const active = users.filter((s) => s.active === true).map((n) => n.name)
const activeCount = active.length;

console.log(userNames);
console.log(active);
console.log('Активних користувачів: ', activeCount);


const products = [
  { id: 1, name: "Apple",  price: 10,  category: "fruit" },
  { id: 2, name: "Pear",   price: 12,  category: "fruit" },
  { id: 3, name: "Bread",  price: 20,  category: "bakery" },
  { id: 4, name: "Cake",   price: 50,  category: "bakery" },
  { id: 5, name: "Cheese", price: 40,  category: "dairy" },
];

const expensive = products.filter((p) => p.price >= 20);
const labels = expensive.map((obj) => `${obj.name}, (${obj.category}): ${obj.price}`);
const bread = labels.map((el) => el.split('')).filter((s) => s !== ',').find((el) => el === 'Bread');

console.log(labels);
console.log(expensive);
console.log(bread)