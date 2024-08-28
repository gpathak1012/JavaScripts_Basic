let revEachWord = "reverse each word and dont change the position";

let newWord = revEachWord.split(" ").map(word => word.split(" ").reverse().join(" ")).join(" ");
// split() -> it will the sentence into different words
// map() -> it will 


console.log(newWord);