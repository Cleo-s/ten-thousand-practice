const text = 'Hello Mike. Here is my phone number +38 (098) 330-00-03, my wife phone number 068-339-09-09 and 920462 my sun number 0683390791. Please use same country code +38 to have opportunity to call me';
//const text = 'Hello Mike. Here is my email is viktor.chukhlov1991@submail.tenthousand.io, @gmail my wife email 1991wife@story-telling.com and my test@gmail.com sun email 05w05v30eyje2v1.v@as.check24.eu. Tag bot with @service.io, don`t make a mistake with service@io';

const solution = /(\+?\d+\s?\(?\-?\d+\)?)\s?(\d+\-?\d+\-?)\d+/g;
const shorterSolution = /(\+?\d+\s?\(?\d+\)?\s?\d+)(\-?\d+)+/g;

console.log(text.match(shorterSolution));