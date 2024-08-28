const numA = [12, 1, 5, 57, 98, 45, 68, 48, 45, 68, 2, 6];
let top = numA[0];
for (let i = 1; i <= numA.length; i++) {
  if (numA[i] < top) {
    top = numA[i];
  }
}
console.log("For Loop:" + top);

// using function
function minNumber(minser) {
  let first = minser[0];
  for (let i = 1; i <= minser.length; i++) {
    if (minser[i] < first) {
      first = minser[i];
    }
  }
  console.log("Using function:" + first);
}
const num = [12, 1, 5, 57, 98, 45, 68, 48, 45, 68, 2, 6];
const minimum = minNumber(num);

// In built functions

let num3 = [12, 1, 5, 57, 98, 45, 68, 48, 45, 68, 2, 6];
let bot = Math.min(...num3);
console.log("Using inbuilt function:" + bot);

// OUTPUT :For Loop:1 || Using function:1|| Using inbuilt function:1