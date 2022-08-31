// Eliminate all odd numbers
const findEven = (arr) => {
  if (!Array.isArray(arr)) {
    return "Error: Invalid input data type"
  }

  let total = []

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]

    if (typeof num !== "number" || isNaN(num)) {
      return "Error: Non-number data detected"
    }

    if (num - parseInt(num) !== 0) {
      return "Error: Decimal value detected"
    }

    // Input only Even (genap)
    if (num % 2 === 0) {
      total.push(num)
    }
  }

  if (!total.length) {
    return "No even values detected"
  }

  return total
}

// console.log(findEven([1, 2, 3, 4, 5, 6, 7, 8]))
module.exports = findEven
