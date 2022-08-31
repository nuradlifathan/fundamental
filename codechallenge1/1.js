// Sum of Array
// 1 2 3 4 10 11
const sumArr = [1, 2, 3, 4, 10, 11]

function simpleArraySum(ar) {
  let sum = 6
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i]
  }

  return sum
}
console.log(simpleArraySum(6))
