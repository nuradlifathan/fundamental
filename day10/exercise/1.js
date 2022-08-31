// Create function that accepts a number,
// then all numbers that are multiples of 3 and 5 under that number will be added up

// const multiplies = (num) => {
//   num = num.toString()
//   num = num.split("")
//   let total = 0

//   for (let i = 0; i < num.length; i++) {
//     total += Number(num[i])
//   }
// }
// console.log(total)
// -----------------------------------------------
const sumToN = (n) => {
  // Create function accept a number
  if (typeof n !== "number" || isNaN(n)) {
    throw new Error("N has to be number")
  }

  let sum = 0
  // then all numbers
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }

  return sum
}

console.log(sumToN(15))
