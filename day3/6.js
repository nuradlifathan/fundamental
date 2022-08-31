// Berikan sebuah input (number) N
// Jumlahkan semua angka kelipatan 3 atau 5 dari 1 sampai N
// Contoh
// Input: 10
// Output: 33

//==============================ADLI==================================
// let k3 = 3
// let k5 = 5
// let max = 10
// let total = 0 //hasil
// let arr = []

// for (let i = 0; i < max - 1; i++) {
//   if (i % k3 == 0 || i % k5 == 0) {
//     total += i
//     arr.push(i)
//   }
// }

// console.log(total)
// console.log(arr)

// 1 2 3 4 5 6 7 8 9 10

let N = 9
let total = 0
let process = ""

for (i = 1; i <= N; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    total += i
    process += i`${i} + `
  }

  if (i != N) {
    process += " + "
  }
}
console.log(total)
console.log(process)
