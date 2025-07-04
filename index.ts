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

// const solution1 = /\d+/g;
// const solution2 = /\b[a-z]+\b/g;
// const solution3 = /\b[A-Z][a-z]+\b/g;
// const solution4 = /[^a-zA-Z0-9\s]+/g;
// const solution5 = /[^a-zA-Z0-9\s]{2,}/g;
// const solution6 = /[a-zA-Z]+[0-9]+/g;
// const solution7 = /[a-zA-Z0-9]{5,}/g;
// const solution8 = /[a-zA-Z]+[-]+[a-zA-Z]+/g;
// const solution9 = /[A-Z]{1}/g;
// const solution10 = /[a-zA-Z]+[0-9]+/g;
// const solution11 = /(?<=@)\w+(?=\/)/g;
// const solution12 = /[a-zA-Z0-9]+@[a-zA-Z0-9.]+\.[a-z]{2,12}/g; // - for task 1. Match a basic email adress
// const solution13 = /(\+?)\d+[0-9\-)(\s]{10,16}(?:\d)/g;
// const solution14 = /(MESS|CALL)[a-zA-Z0-9]{8}(CA|US)/g;
// const solution15 = /\w+(@gmail.com)/g; // - for task 2. Match only emails from a specific domain
// const solution16 = /(@)[a-zA-Z0-9_]+\s[^!-,]{1,15}/g; // - for task 3. Match a Twitter-style nickname
// const solution17 = /((http(s?):\/\/)|(www\.?))[a-zA-Z0-9\._-]+\.[a-z]{2,12}(\/[a-z]+)/g; // - for task 4 & 5. Match a full URL with http/https | Match a URL with optional www and path
// const solution18 = /(#)\w+/g; // - for task 6. Match a hashtag
// const solution19 = /(<)[a-z\="\{\}\s]+(\/>)/g; // - for task 7 & 8. Match HTML-like tags | Match self-closing HTML tags
// const solution20 = /[a-z]+[A-Z]+(?:[a-z])+/g;
// const solution21 = /([A-Z])[a-z]+[A-Z](?:\w+)+/g;
// const solution22 = /(\d+.\d+.\d+.(?:\d+))+/g;
//const solution23 = /(\w+:|:(?::))(?:\w+:.(?:\w+:.(?:\w+:.(?:\w+(?::.(?:\w+))))))/g;
//const solution24 = //g;
// const solution25 = /([A-Za-z]+(?:\s+[A-Za-z]+)+)\s<([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,})>/g;
// const solution26 = /(?<!https?:\/\/)(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,12}/g


// const tokens = 'CALLA1B2C3D4US MESSZ9X8Y7W6CACALL1234ABCDUS, MESSQWER5678CA, CALLZXCVBN12US,MESS01928374CA. CALLLMNOPQR1US MESSHELLO88CA';
// const text = '213@gmail.com, sdf@mail.ua, 123@gmail.com, hgf@life.com @elonmusk, <div/>, <img src=""/>, # @NASA @TheRock http://example.org/page';
// const text1 = 'userName", "totalAmount", "base64Decoder UserProfile", "LoginPage", "ApiClient 192.168.0.1, fe80::1, ::, AA-BB-CC-DD-EE-FF';
// const text2 = ' http://example.com, example.com/page example.com, my-site.net, https://shop.online.store'

// console.time('solution12');
// console.log(text2.match(solution26));
// console.timeEnd('solution12');

// 1. Match a price like $12.99
// 2. Match lowercase 5-letter words
// 3. Match .jpg, .png, or .gif files
// 4. Match strings starting with Hello and ending with world
// 5. Match 4-digit years from 1990 to 2029
// 6. Match words containing 2+ digits
// 7. Match all digits
// 8. Match non-word characters
// 9. Match whitespace characters
// 10. Match all words (letters, digits, _)
// 11. Match optional titles (Mr., Ms. or none) + name
// 12. Match phone numbers like +380991234567
// 13. Match email addresses
// 14. Match all capitalized words
// 15. Match three-letter country codes
// 16. Match hashtags
// 17. Match only repeated letters (e.g. aa, bbb)
// 18. Match strings with only numbers (full string)
// 19. Match repeated words like ha ha ha
// 20. Match postal codes (5 digits only)
// 21. Match numbers only if followed by px (lookahead)
// 22. Match words NOT followed by ! (negative lookahead)
// 23. Match domains not part of a URL (using lookbehind or filter)
// 24. Match lines starting with # (with m flag)
// 25. Match <div>...</div> content even across lines (use s flag)
// 26. Match emojis using Unicode mode
// 27. Match words of exactly 4 letters
// 28. Match strings that contain both letters and numbers
// 29. Match time in HH:MM format
// 30. Match MAC addresses (00:1A:2B:3C:4D:5E)

const solution1 = /(?<=\$)\w+.\w+/g;
const solution2 = /\b[a-z]{1,5}\b/g;
const solution3 = /\w+.(?:png|jpg|gif)+/g;
const solution4 = /^Hello.*world$/g;
const solution5 = /199[0-9]|20[0-2][0-9]/g;
const solution6 = /[a-zA-Z]+[0-9]{2,}/g;
const solution7 = /\d+/g;
const solution8 = /\W+/g;
const solution9 = /\s/g;
const solution10 = /\w+/g;
const solution11 = /(?:Mr.|Ms.)\s\w+/g; 
const solution12 = /\+380+\d+/g;
const solution13 = /\w+@[a-z]+\.[a-z]{2,12}/g;
const solution14 = /[A-Z]+[a-z]+/g;
const solution15 = /\b\w{3}\b/g;
const solution16 = /#\w+/g;
const solution17 = /[a-zA-Z]{2,}/g;
const solution18 = /[a-zA-Z]+[0-9]+/g;
const solution19 = /(\w+)(\s\1)+/g;
const solution20 = /\b[0-9]{5}\b/g;
//const solution21 = /\d+px$/g;
const solution22 = /\b\w+(?!\!)\b/g;
const solution23 = /(?<=https:\/\/|http:\/\/)\w+\.[a-z]{2,12}/g;

//const text = 'example.com, https://example.com, my-site.net';

console.log(text.match(solution23));

// task1 input - 'Prices: $0.99, $14.00, and 12.5';
// task2 input - 'List: apple, zebra, Mango, boat';
// task3 input - 'dog.jpg cat.gif file.png video.mp4';
// task4 input - 'Hello brave new world Hello you world Welcome to the world';
// task5 input - 'Born in 1985, married in 2020, 2025, 1995, future 2003 is 2030';
// task6 input - 'id12 code9 item1234 abc';
// task7 input - 'Call: 123-456, Alt: 789';
// task8 input - '@user! What#is$up?';
// task9 input - 'New\nLine and\tTab and space';
// task10 input - 'Name_1 age2 _hidden';
// task11 input - 'Mr. John, Ms. Jane, Alice, Dr. Bob';
// task12 input - 'Call +380991234567 or +18005551234';
// task13 input - 'user@example.com, bad@email, test@site.org';
// task14 input - 'London is in England but paris is not';
// task15 input - 'USA, uk, FRA, ussr';
// task16 input - '#React #100DaysOfCode ##wrong';
// task17 input - 'aaa bb b cccc d';
// task18 input - '1234 abc123 0000';
// task19 input - 'ha ha ha! lol lol wow';
// task20 input - 'Zip: 12345, Not: 1234a or 123456';
// task21 input - font-size: 14px; margin: 10em;
// task22 input - 'Wow! Good! Yes Great Okay';
// task22 input - 'example.com, https://example.com, my-site.net';
// task23 input
// task24 input
// task25 input
// task26 input
// task27 input
// task28 input
// task29 input
// task30 input
