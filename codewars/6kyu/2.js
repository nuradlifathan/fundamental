// Roman Numerals Encoder

function solution(number) {
  const hashmap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  let roman = ""

  for (var i of Object.keys(hashmap)) {
    var findroman = Math.floor(number / hashmap[i])
    number -= findroman * hashmap[i]
    roman += i.repeat(findroman)
  }
  return roman
}
console.log(solution(5))
