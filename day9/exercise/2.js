// Input sebuah array of number
// dapatkan selisih terbesar antara 2 number dalam array

//[10, 3, 7, 1, 5, 14]
// => 14 - 1 = 13

const maxDifference = (arr) => {
  let max = arr[0]
  let min = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }

    if (arr[i] > max) {
      max = arr[i]
    }
  }

  return max - min
}

console.log(maxDifference([10, 3, 7, 1, 5, 14]))
