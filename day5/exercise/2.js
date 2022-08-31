//Buat sebuah function untuk FizzBuzz
// terima 1 parameter (n), dimana n adalah batas maximum
// untuk urutan bilangan fizzbuzz

// const fizzBuzz = (n) => {
//   for (let i = 1; i <= n; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//       console.log("FizzBuzz")
//     } else if (i % 5 === 0) {
//       console.log("Buzz")
//     } else if (i % 3 === 0) {
//       console.log("Fizz")
//     } else {
//       console.log(i)
//     }
//   }
// }

// fizzBuzz(10)
//--------------------------------------------------
// Car Kak Theo

const fizzBuzz = (n) => {
  if (n < 1) {
    console.log("N harus lebih besar dari 0")
    return
  }
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
}
fizzBuzz(-1)
