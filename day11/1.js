//create function convert excel

// const convertExcel = (str) => {
//   // Validasi input string
//   if (typeof str === "string" || str instanceof String) {
//     str = str.toUpperCase()

//     // create variable
//     let convert = 0
//     letter = str.length
//     // find index A looping it then multiplication , pow**26
//     for (let i = 0; i < letter; i++) {
//       convert += (str.charCodeAt(i) - 64) * Math.pow(26, letter - i - 1)
//     }
//     return convert
//   }
//   return undefined
// }

// console.log(convertExcel("A"))
// console.log(convertExcel("B"))
// console.log(convertExcel("ab"))

// -------------------- Kak Theo -----------------
const excelColumn = (s) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  let result = 0

  for (let i = 0; i < s.length; i++) {
    result *= 26
    result += alphabet.indexOf(s[i]) + 1
  }
  return result
}
console.log(excelColumn("AAA"))
