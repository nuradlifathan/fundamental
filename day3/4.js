// Dapatkan value tertinggi dan terendah dalam sebuah array
// Input : [10, 4, 5, 2, 23, 7, 1]
// Output : "Min: 1" || Max: "23"

// Cara dengan Math.max/min
// let a = Math.max(10, 4, 5, 2, 23, 7, 1)
// let b = Math.min(10, 4, 5, 2, 23, 7, 1)

// console.log(`"Max" ${a}`, `"Min" ${b}`)

//Cara dengan Looping dan IF ELSE
let arr = [10, 4, 5, 2, 23, 7, 1]
let min = arr[0]
let max = arr[0]

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]
  } else if (arr[i] < min) {
    min = arr[i]
  }
}

console.log(`"Max" ${max}`)
console.log(`"Min" ${min}`)
//atau juga console.log nya bisa memakai dibawah ini agar tidak panjang
console.log(``)
