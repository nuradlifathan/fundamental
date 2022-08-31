// Terima sebuah input string
// Output sebuah boolean, kalau string adalah palindrome
// Output nya "{}" adalah sebuah palindrome
// Kalau string bukan palindrome
// Output nya "{}" bukan sebuah palindrome

//ADLI
let str = "ChamBer".toLowerCase()
let palindrome = str.split("").reverse().join("")

if (str === palindrome) {
  console.log(`${str} adalah sebuah palindrome`)
} else {
  console.log(`${str} Bukan sebuah palindrome`)
}
