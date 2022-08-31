// input sebuah angka positive (N)
// Carilah faktorial dari N
// Input : 5
// Output : 1 x 2 x 3 x 4 x 5

const number = 5
let total = 1

if (number < 0) {
  console.log(`ERROR tidak bisa angka NEGATIVE`)
} else if (number === 0) {
  console.log(`Faktorial dari ${number} is 1`)
} else {
  for (let i = 1; i <= number; i++) {
    total *= i
  }
}
console.log(`Faktorial dari ${number} is ${total}`)

//dengan while
let i = 1
while (i <= N) {
  total = total * i
  i++
}
