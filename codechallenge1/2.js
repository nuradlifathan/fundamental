// Plus Minus Hackerrank
// n length of array arr , dari 0 sampai 100
// arr = array dengan value -100 sampai 100
//

plusMinus = (arr) => {
  let n = arr.length
  let positive = 0
  let negative = 0
  let zeros = 0

  // Menentukan for loop
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      positive += 1
    } else if (arr[i] < 0) {
      negative += 1
    } else {
      zeros += 1
    }
  }
  // Input
  let posit = positive / n
  let negat = negative / n
  let zero = zeros / n

  //Output
  console.log(posit.toFixed(6))
  console.log(negat.toFixed(6))
  console.log(zero.toFixed(6))
}
const arr = [-4, 3, -9, 0, 4, 1]
plusMinus(arr)
