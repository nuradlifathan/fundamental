// You're a Square
// Given an integral number, determine if it's a square number

// Using Math.sqrt
// var isSquare = (n) => {
//   return Math.sqrt(n) % 1 === 0
// }

// Using IF Else

const isSquare = (n) => {
  if (n >= 0 && Math.sqrt(n) % 1 === 0) {
    return true
  } else return false
}

console.log(`-1 => ${isSquare(-1)}`)
console.log(`0 => ${isSquare(0)}`)
console.log(`3 => ${isSquare(3)}`)
console.log(`4 => ${isSquare(4)}`)
console.log(`25 => ${isSquare(25)}`)
console.log(`26 => ${isSquare(26)}`)
