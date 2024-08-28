//using for Loop
const num = [12, 1, 5, 57, 98, 45, 68, 48, 45, 68, 2, 6];
let arr = num[0];
for (let i = 1; i <= num.length; i++) {
  if (num[i] > arr) {
    arr = num[i];
  }
}
console.log("Using for Loop:"+arr);

// create a function and solve the above  problem
function largeNum(series) {
  let arr = series[0];
  for (let i = 1; i <= series.length; i++) {
    if (series[i] > arr) {
      arr = series[i];
    }
  }
  const num1 = [12, 1, 5, 57, 98, 45, 68, 48, 45, 68, 2, 6];
  const large = largeNum(num1);
}
console.log("using function:" + arr);

//  solve by using in built functions the above  problem

const num2 = [12, 1, 5, 57, 98, 45, 68, 48, 45, 68, 2, 6];
const largest = Math.max(...num2);
console.log("In built function:"+largest);
