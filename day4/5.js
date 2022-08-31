//  Terima sebuah number sebagai input
// 12345
// jumlahkan setiap digit yang ada di number
// 12345 -> 1 + 2 + 3 + 4 +5
// Output : 15

// let num = 12345
// let total = 0

// while (num) {
//   total = total + num % 10
//   num = parseInt(num / 10)
// }
// console.log(total)

//Cara Kak Fidel=======================
// Input

let angka = 19573
let total = 0

// Function

for (i = angka; i != 0; i = Math.floor(i / 10)) {
  total = total + (i % 10)
}
// Output

console.log(total)
