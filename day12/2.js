// Create function to convert roman numeral to integer
const romanInt = (num) => {
  hashMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let total = 0

  for (i = 0; i < num.length; i++) {
    let cur = hashMap[num[i]]
    let next = hashMap[num[i + 1]]

    if (cur < next) {
      total += next - cur
      i++
    } else {
      total += cur
    }
  }
  return total
}
console.log(romanInt("MCMXCIV"))
