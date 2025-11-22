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

//-----------------------------------------------------TASK 6-----------------------------------------------------//

const students = [
  { id: 1, name: "Vlad",  score: 95 },
  { id: 2, name: "Misha", score: 70 },
  { id: 3, name: "Anna",  score: 85 },
  { id: 4, name: "Oleh",  score: 60 },
];

const passed = students.filter((el) => {
  if (el.score >= 80) 
    return el
  });

const passedNames = passed.map((el) => el.name);
const isMisha = students.find((el) => {
  if (el.name === 'Misha')
    return 'Misha has score 70';
});

const withBonus = students.map((el) => el.score + 5);

console.log(passed, passedNames, isMisha, withBonus);

//-----------------------------------------------------TASK 7-----------------------------------------------------//

function fakeFetch(name, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(name), ms);
  });
} 

async function test() {
  const response = await fakeFetch('Hi, Misha!', 500);
  console.log(response);
}

test();

//-----------------------------------------------------TASK 7-----------------------------------------------------//

async function loadProfile() {
  const userLoad = await fakeFetch('Loading user...', 300);
  console.log(userLoad);
  const profilePictureLoad = await fakeFetch('Loading user profile picture...', 1000);
  console.log(profilePictureLoad);
}

loadProfile();

//-----------------------------------------------------TASK 8-----------------------------------------------------//

function fakeFetchMaybeError(meassage, shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail)
        reject(new Error('Internal server error. Status: 500'));
      else 
        resolve(meassage);
    }, 500);
  });
};

async function errorTest() {
  try {
    const response = await fakeFetchMaybeError('Test passed!', true);
    console.log(response);
  }
  catch (e) {
     console.log('Test failed. Message:', e);
  };
};

errorTest();