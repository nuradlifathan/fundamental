// ------------------- Kak Theo -------------

const findMajority = (arr) => {
  const hashMap = {}

  for (digit of arr) {
    if (!hashMap[digit]) {
      hashMap[digit] = 1
    } else {
      hashMap[digit] += 1

      if (hashMap[digit] > arr.length / 2) {
        return digit
      }
    }
  }

  //   for (key in hashMap) {
  //     if (hashMap[key] > arr.length / 2) {
  //       return key
  //     }
  //   }
}

console.log(findMajority([2, 2, 1, 1, 1, 2, 2]))
