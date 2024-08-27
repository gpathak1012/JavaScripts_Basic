// Reverse String
let strin = "Hello World how are you !!";
let strin1 = " ";
for (let i = 0; i <= strin.length - 1; i++) {
  strin1 = strin.charAt(i) + strin1;
}
console.log(strin1);

// Reverse String by using the function
function rever(s) {
  let str1 = " ";
  for (let i = 0; i <= s.length - 1; i++) {
    str1 = str.charAt(i) + str1;
  }
  return str1;
}
let str = "hello used the function";
let str1 = rever(str);
console.log(str1);
