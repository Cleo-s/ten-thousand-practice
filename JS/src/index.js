const nums1 = [1, 3, 5, 7, 9];

const sum = nums1.reduce((a, c) => a + c);
const extended = nums1.push(11);
const hasFive = nums1.includes(5);

console.log(nums1, sum, extended, hasFive);

//-----------------------------------------------------TASK 1-----------------------------------------------------//

const nums2 = [4, 10, 15, 3, 21, 8];

const even = nums2.filter((e) => {
  if (e % 2 === 0)
    return e;
});

const doubled = nums2.map((e) => e * 2);
const greaterThanTen = nums2.filter((e) => e > 10).map((e) => `${e} is > 10`);

//-----------------------------------------------------TASK 2-----------------------------------------------------//

console.log(even, doubled, greaterThanTen)

const nums3 = [1, 2, 2, 3, 3, 3, 4, 5, 5];

const unique = nums3.filter((e, i) => nums3.indexOf(e) === i)
const squaredArr = unique.map((e) => Math.pow(e, 2))

console.log(unique, squaredArr)

//-----------------------------------------------------TASK 3-----------------------------------------------------//

const user = {
  id: 1,
  name: 'Vlad',
  age: 25,
  active: true,
} 

console.log(`User ${user.name} is ${user.age} years old`);

const updatedUser = {...user, email: 'test@example.com', active: false};

console.log(updatedUser);

//-----------------------------------------------------TASK 4-----------------------------------------------------//

const settings = {
  theme: 'light',
  language: 'uk',
  showNotifications: true,
}

const settingsCopy = {...settings, theme: 'dark', language: 'en'};

function describeSettings(obj) {
  obj.showNotifications === true ? 
  console.log(`Theme: ${obj.theme}, language: ${obj.language}, notifications: on`) 
  : 
  console.log(`Theme: ${obj.theme}, language: ${obj.language}`)
}

describeSettings(settingsCopy);

//-----------------------------------------------------TASK 5-----------------------------------------------------//

const profile = {
  id: 1,
  name: "Vlad",
  contacts: {
    email: "test@example.com",
    phone: "+380000000000",
  },
};

const updatedProfile = {
  ...profile,
  contacts: {
    ...profile.contacts,
    email: 'new@example.com',
  }
};

console.log(updatedProfile);