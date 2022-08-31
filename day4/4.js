// Terima sebuah input number harus positive dan bulat
// Output sebuah boolean, kalau string adalah palindrome
// Output nya "{}" adalah sebuah palindrome
// Kalau string bukan palindrome
// Output nya "{}" bukan sebuah palindrome
//

let num = 1234554321
let temp = num
let palindrome = 0

while (temp > 0) {
  let lastDigit = temp % 10 // 12345 dibagi 10 menjadi = 5
  palindrome = palindrome * 10 + lastDigit // lastDigit 5

  temp = parseInt(temp / 10) // temp (12345) / 10
}

if (num === palindrome) {
  console.log(`${num} adalah sebuah palindrome`)
} else {
  console.log(`${num} Bukan sebuah palindrome`)
}
