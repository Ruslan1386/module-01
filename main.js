//пункт 1
const firstLine = 'qwertyuiop';
const middleLine= 'asdfghjkl';
const bottomLine= 'xcvbnm';
//пункт 2
const a = firstLine.length;
const b = middleLine.length;
const c = bottomLine.length;
//пункт 3
console.log("Length first line" + ": " + a);
console.log("Length middle line" + ": " + b);
console.log("Length boottom line" + ": " + c);
//пункт 4
console.log("Indices of the first line :" + " first: " + firstLine.charAt(0) + " last: " +  firstLine.charAt(9));
console.log("Indices of the middle line :" + " first: " + middleLine.charAt(0) + " last: " +  firstLine.charAt(8));
console.log("Indices of the bottom line :" + " first: " + bottomLine.charAt(0) + " last: " +  firstLine.charAt(5));
//пункт 5
let i = firstLine.indexOf('b');
let n = middleLine.indexOf('b');
let j = bottomLine.indexOf('b');
//пункт 6
console.log(`i = ${i}`);
console.log(`n = ${n}`);
console.log(`j = ${j}`);