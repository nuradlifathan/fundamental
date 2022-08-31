// input sebuah string, cari total nilai sebuah kata jika
// setiap huruf memiliki value urutannya dalam abjad
// Input : "abcd"
// Output : 10
// A -> 1
// B -> 2
// C -> 3
// D -> 4
// a + b + c + d = 1 + 2 + 3 + 4 = 10

//================ADLI tapi blm beres============================
// let input = "ABCD"
// let arrAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

// console.log(arrAlpha.indexOf(input) + 1)

// let str = "abcd"

// for (let i = 1; i < str.length; i++) {
//   console.log(str[i] + i)
// }

//==================KAK THEO-============
// let arrAlpha = "abcdefghijklmnopqrstuvwxyz".split("")
// let input = "abcd"
// input = input.split("")
// let total = 0

// for (let i = 0; i < input.length; i++) {
//   total = total + arrAlpha.indexOf(input[i]) + 1
// }

// console.log(total)
//=====================tambahan=========================
// hanya menghitung ganjil dari abcd

// let str = "abcd"
// odd = []
// even = []

// for (var i = 0; i < str.length; i++) {
//   i % 2 === 0 ? even.push(str[i]) : odd.push(str[i])
// }

// console.log(odd.join(""))
// console.log(even.join(""))

//================kak theo
let arrAlp = "abcdefghijklmnopqrstuvwxyz".split("")
let input = "abcd"
input = input.split("")
let total = 0

for (let i = 0; i < input.length; i++) {
  let value = arrAlp.indexOf(input[i]) + 1

  if (value % 2 !== 0) {
    total = total + value
  }
}
