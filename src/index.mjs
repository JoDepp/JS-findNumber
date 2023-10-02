import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
JS program to find which number is closer to 100.
</div>
`;
// take two values, find how far away a and b are from 100, is a when taken from 100
// smaller than be and if it is than we know what number is closer to 100
// because it's a smaller value so pass back a from a ternary operator and if not poss back b.

const closerTo100 = (a, b) => (100-a) < (100-b) ? a : b;

console.log(closerTo100(99, 1));
console.log(closerTo100(49, 51));
console.log(closerTo100(50, 50));





//practice exercise from codebubb on youtube