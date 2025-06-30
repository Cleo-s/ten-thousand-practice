const text = '<@Misha/> misha@gmail.com_fdgdfg123 Hey team. I would like to have a call with <@Megan/> Megan@gmail.com.1231231 at 17:00. <@Viktor/> viKtoR@mail.ua would you join us?';

// 1. Match valid email addresses
// 💡 e.g. "user@example.com", "john.doe_94@mail.co.uk"

// Ignore invalid ones like @example, john@@mail.

// 2. Match quoted strings
// 💡 Match text inside double quotes:
// → "This is a test" from He said: "This is a test"

// Hint: be careful not to be greedy.

// 3. Match hex color codes
// 💡 Match #fff, #FFFFFF, #1a2b3c — all valid hex codes

// 4. Match repeated words (like “the the”)
// 💡 From "I saw the the bird fly" → match "the the"

// Hint: use backreferences

// 5. Match dates in format DD/MM/YYYY
// 💡 e.g. "25/06/2025" or "01/01/1999"

// Optional: Reject invalid dates like 99/99/9999 — bonus level

// 6. Match floating point numbers (with optional minus)
// 💡 e.g. "3.14", "-0.5", "0.0001"

// Should not match . or -. alone.

// 7. Match HTML-like tags
// 💡 e.g. <div>, <img src="x">, </p>
// → Match the entire tag.

// 8. Match camelCase identifiers
// 💡 From "userName totalAmount base64Decoder"
// → Match "userName", "totalAmount" etc.

// Must start with lowercase, followed by at least one capital chunk.

// 9. Match valid IPv4 addresses
// 💡 e.g. "192.168.1.1", "8.8.8.8"
// → Match only values in 0–255 range (bonus if you check ranges).

// 10. Match words that don’t contain vowels
// 💡 From "my fly cry sky try"
// → Match "my", "fly", "cry" but not "sky" or "try" if you treat y as vowel.
// Optional: customize vowel set (a, e, i, o, u, sometimes y)

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
const solution12 = /[a-zA-Z0-9]+@[a-zA-Z0-9.]+\.[a-z]{2,12}/g;


console.time('solution12');
console.log(text.match(solution12));
console.timeEnd('solution12');