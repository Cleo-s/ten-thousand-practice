const text = 'Hello1654, hello241 world3456, hello, Vladik Pidoras, Vladik-Pidoras, word-word-word, A, B, C, AB, BC - + / ,, ...';

// 1. Match all whole numbers in a string
// 💡 Example: "My code is 1234 and 5678" → matches ["1234", "5678"] -- DONE

// 2. Match all lowercase words
// 💡 Match sequences like "hello", but skip "Hello" or "HELLO" -- DONE

// 3. Match all capitalized words
// 💡 Words that start with a capital letter followed by lowercase letters, like "World" or "Paladin" -- DONE

// 4. Match all special symbols
// 💡 Match all non-letter, non-digit, non-space characters (like @, -, +, .) -- DONE

// 5. Match sequences of punctuation
// 💡 Match 2 or more punctuation symbols in a row, like "---" or "..." -- DONE

// 6. Match all words that contain at least one digit
// 💡 Examples: "abc1", "a3b", "9to5" — not "hello" -- DONE

// 7. Match all words longer than 5 characters
// 💡 Use a quantifier like {6,} to match length-based words -- DONE

// 8. Match a hyphenated word
// 💡 Like "state-of-the-art" — a word that includes - between alphabetic parts -- DONE

// 9. Match all standalone capital letters
// 💡 Example: "A B C" → matches "A", "B", "C" -- DONE

// 10. Match sequences that start with a letter and end with a number
// 💡 Examples: "a1", "abc3", "word7" — not "3a" or "8ball" -- DONE

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

console.log(text.match(solution10));