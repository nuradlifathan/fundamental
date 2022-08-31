// Find Largest number
const largeNum = (num) => {
  if (typeof num !== "number" || isNaN(num)) {
    return "Error: Invalid input data type"
  }

  if (num < 0) {
    return "Error: Number has to be a positive integer"
  }

  if (num - parseInt(num) !== 0) {
    return "Error: number cannot be a decimal"
  }

  let strNum = num.toString() // number yang menjadi string
  let arrNum = strNum.split("") // ubah menjadi array

  let sort = arrNum.sort().reverse() // sort array besar ke kecil

  let result = sort.join("")

  return Number(result)
  //   return Number(num.toString().split("").reveres().join(""))
}

// console.log(largeNum())
module.exports = largeNum
