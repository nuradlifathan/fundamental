// 1 Create function accept a number
// const checkDigit = (num) => {
//   let total = num
//   while (total.length > 1) {
//     t = 0
//     // 2 then return is the result of sum of all digit
//     for (let i = 0; i < total.length; i++) {
//       t = Number(t) + Number(total[i])
//     }
//     total = t.toString()
//   }
//   return total
// }
// //Output
// console.log(checkDigit("1234567890"))
//------------------Kak Theo----------------------------
const singleDigit = (n) => {
  if (typeof n !== "number" || isNaN(n)) {
    throw new Error("N has to be number")
  }

  if (n < 10) {
    return n
  }

  let result = 0
  let nStr = n.toString()

  while (nStr.length > 1) {
    for (let i = 0; i < nStr.length; i++) {
      result += Number(nStr[i])
    }

    nStr = result.toString()
    result = 0
  }
}
console.log(singleDigit("1234"))
