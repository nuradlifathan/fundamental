// If you can't sleep, just count sheep!!
var countSheep = function (num) {
  let total = ""

  for (let i = 1; i <= num; i++) {
    if (num === 0) {
      return ""
    }
    total += `${i} sheep...`
  }
  return total
}
