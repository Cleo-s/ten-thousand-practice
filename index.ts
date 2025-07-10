//const text = 'Hello Mike. Here is my phone number +38 (098) 330-00-03, my wife phone number 068-339-09-09 and 920462 my sun number 0683390791. Please use same country code +38 to have opportunity to call me';
//const text = 'Hello Mike. Here is my email is 123.viktor.chukhlov1991@submail.tenthousand.io, @gmail my wife email 1991wife@story-telling.com and my test@gmail.com sun email 05w05v30eyje2v1.v@as.check24.eu. Tag bot with @service.io, don`t make a mistake with service@io';

const text1 = "Contact: john.doe@mail.com, admin@site.local, bad@email, me@.com, valid+alias@domain.io";
const text2 = "Visit https://google.com or http://example.org.link/path. Ignore ftp:// links.";
const text3 = "Call +38 (067) 123-45-67, 066 321 99 88 or 0931234567 for info.";
const text4 = "Whitelist: 192.168.0.1, 10.0.0.254, not_ip: 300.999.0.1";
const text5 = "Follow @user123, check #RegexPractice and ignore @invalid-mention or #123Invalid.";
const text6 = "Devices: 00:1A:2B:3C:4D:5E, a2-b3-c4-d5-e6-f7, wrong: 0011223344GG.";
const text7 = "IPv6: fe80::1ff:fe23:4567:890a, ::1, 2001:0db8:85a3::8a2e:0370:7334";

const solution1 = /((\w+\.)?(\w+\+)?)+\w+@(\w+\.?\-?)+\.\w{2,}/g;
const solution2 = /(?<=http([s]?)\:\/\/)\w+(\.\w+)+/g;
const solution3 = /(\+?\d+\s?\(?\d+\)?\s)?(\d+(\s?|\-?\d+)+)?\d+/g;
const solution4 = /[]/g;
const solution5 = /((@\w+)|(#\w+))/g
const solution6 = /(\w+\:|\w+\-)+\w+/g;
const solution7 = /(\w+\:\:?)+\w+/g;

//const shorterSolution = /(\+?\d+\s?\(?\d+\)?\s?\d+)(\-?\d+)+/g;
const hardestSolution = /(\d{2}\.\d{2}(?:\.\d{4})?)[\s\S]*?([\d,.]+)\s?-?(\$|грн|€)/g;


console.log(text7.match(solution7));