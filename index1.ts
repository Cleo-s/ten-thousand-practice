const text = 'Hello Mike. Here is my phone number +38 (098) 330-00-03, my wife phone number 068-339-09-09 and 920462 my sun number 0683390791. Please use same country code +38 to have opportunity to call me';

const solution = /(?:\+)\d+/g;

console.log(text.match(solution))