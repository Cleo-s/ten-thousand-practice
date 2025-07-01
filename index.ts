// 1. Match a basic email address
// 💡 e.g. user@example.com

// 2. Match only emails from a specific domain
// 💡 e.g. @gmail.com or @mycompany.org

// 3. Match a Twitter-style nickname
// 💡 e.g. @username, but skip @123

// 4. Match a full URL with http/https
// 💡 e.g. https://site.com, http://example.org/page

// 5. Match a URL with optional www and path
// 💡 e.g. www.example.com/path, site.org, example.net/about

// 6. Match a hashtag
// 💡 e.g. #regex, #DnD_is_fun, skip just #

// 7. Match HTML-like tags
// 💡 e.g. <div>, <a href="...">, </p>

// 8. Match self-closing HTML tags
// 💡 e.g. <img src="x.jpg"/>, <br/>

const solution1 = /\d+/g;
const solution2 = /\b[a-z]+\b/g;
const solution3 = /\b[A-Z][a-z]+\b/g;
const solution4 = /[^a-zA-Z0-9\s]+/g;
const solution5 = /[^a-zA-Z0-9\s]{2,}/g;
const solution6 = /[a-zA-Z]+[0-9]+/g;
const solution7 = /[a-zA-Z0-9]{5,}/g;
const solution8 = /[a-zA-Z]+[-]+[a-zA-Z]+/g;
const solution9 = /[A-Z]{1}/g;
const solution10 = /[a-zA-Z]+[0-9]+/g;
const solution11 = /(?<=@)\w+(?=\/)/g;
const solution12 = /[a-zA-Z0-9]+@[a-zA-Z0-9.]+\.[a-z]{2,12}/g; // - for task 1. Match a basic email adress
const solution13 = /(\+?)\d+[0-9\-)(\s]{10,16}(?:\d)/g;
const solution14 = /(MESS|CALL)[a-zA-Z0-9]{8}(CA|US)/g;
const solution15 = /\w+(@gmail.com)/g; // - for task 2. Match only emails from a specific domain
const solution16 = /(@)[a-zA-Z0-9_]+\s[^!-,]{1,15}/g; // - for task 3. Match a Twitter-style nickname
const solution17 = /((http(s?):\/\/)|(www\.?))[a-zA-Z0-9\._-]+\.[a-z]{2,12}(\/[a-z]+)/g; // for task 4 & 5. Match a full URL with http/https | Match a URL with optional www and path

const tokens = 'CALLA1B2C3D4US MESSZ9X8Y7W6CACALL1234ABCDUS, MESSQWER5678CA, CALLZXCVBN12US,MESS01928374CA. CALLLMNOPQR1US MESSHELLO88CA';
const text = '213@gmail.com, sdf@mail.ua, 123@gmail.com, hgf@life.com @elonmusk @NASA @TheRock @john_doe_1987 @_codingWizard @ChatGPT_bot @a1b2c3 @DnD_Master https://site.com, www.example.com/path, site.org, example.net/about http://example.org/page';

console.time('solution12');
console.log(text.match(solution17));
console.timeEnd('solution12');