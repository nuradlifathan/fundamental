// Menggunakan Sorting

const findMajority = (arr) => {
  arr = arr.sort()

  let prev
  let count = 0

  for (digit of arr) {
    if (prev === digit) {
      count++

      if (count > arr.length / 2) {
        return digit
      }
    } else {
      count = 1
    }
    prev = digit
  }
}

console.log(findMajority([4, 4, 4, 1, 3]))
