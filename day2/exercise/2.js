// write a code to find the sum of the numbers 1 to N
//cari jumlah dari angka 1 sampai N
//contoh N = 5 -- Jumlahnya: 1 + 2 + 3 + 4 + 5 + 6 + 7

//output :
// "process : 1 + 2 + 3 + 4 + 5 + 6 + 7"
// "Result :: 28"

let result = 0
let process = ""
let n = 1

for (let i = 1; i <= n; i++) {
  // i = 1 | result = 2
  result = result + i
  process += `${i} +`

  if (i === n) {
    break
  }
  process += " + "
}
console.log("Result: " + result)
console.log("Process: " + process)

//===============================================================

//FizzBuzz
// Terima 1 input (number)
// let input = 10
// tampilkan angka 1 - input
// Kalau input kelipatan 3-> output: "Fizz"
// Kalau input kelipatan 5-> output: "Buzz"
// Kalau input kelipatan 3 dan 5 -> output: "FizzBuzz"
// Kalau input bukan kelipatan 3 dan 5 -> output: angka

// let n = 20

// for (let i = 1; i <= n; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log("FizzBuzz")
//   } else if (i % 5 === 0) {
//     console.log("Buzz")
//   } else if (i % 3 === 0) {
//     console.log("Fizz")
//   } else {
//     console.log(i)
//   }
// }
