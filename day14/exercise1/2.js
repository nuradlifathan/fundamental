// Find Odd Numbers in Array
const findOdd = (arr) => {
  if (!Array.isArray(arr)) {
    return "Error : Invalid input data type"
  }

  if (!arr.length) {
    return "Error : Array is empty"
  }

  let hashMap = {}

  for (num of arr) {
    if (typeof num !== "number") {
      return "Error : Non-number value detected"
    }

    if (isNaN(num)) {
      return "Error : NaN value detected"
    }

    if (num - parseInt(num) !== 0) {
      return "Error : Decimal value detected"
    }

    if (hashMap[num]) {
      hashMap[num] += 1
    } else {
      hashMap[num] = 1
    }
  }

  for (key in hashMap) {
    if (hashMap[key] % 2 !== 0) {
      return Number(key)
    }
  }

  return "No values with odd occurence"
}

module.exports = findOdd
