// Dapatkan value numerical (urutan abjad) sebuah karakter
// Input : "J"
// Output : 10

//==========================ADLI=========================
// let arr = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ]
// let input = arr.indexOf("Z")

// console.log(` ${input}`)

//==========================================
//Cara Kak THEO

let input = "J"
input = input.toUpperCase()
let arrAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

console.log(arrAlpha.indexOf(input) + 1)
