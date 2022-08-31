// Birthday Cake Candels Hackerrank
// Input  = 3 2 1 3
// Output = 0

const ar = [3, 2, 1, 3]

function birthdayCakeCandles(ar) {
  let tallest = ar[0]
  let lowest = ar[0]

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > tallest) {
      tallest = ar[i]
    }
  }
  console.log(`${tallest}`)
}

birthdayCakeCandles(ar)
//------------------------------------------
// const ar = [3, 2, 1, 3]

// function birthdayCakeCandles(ar) {
//   let tallest = Math.max(...ar)
//   let total = 0

//   for (let i = 0; i < ar.length; i++) {
//     if (ar[i] == tallest) {
//       total += 1
//     }
//   }
//   return total
// }
// console.log(birthdayCakeCandles(ar))
// birthdayCakeCandles(ar)
//===================================================
