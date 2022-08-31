function gamingArray(arr) {
  let winner = ""
  let result = 0

  while (arr.length) {
    arr.splice(arr.indexOf(Math.max(...arr)))
    result++
  }

  winner = result % 2 === 0 ? "ANDY" : "BOB"
  return winner
}

// function gamingArray(arr) {
//   let winner = ""
//   let result = 0

//   while (arr.length) {
//     arr.splice(arr.indexOf(Math.max(...arr)))
//     result++
//   }

//   winner = result % 2 === 0 ? "ANDY" : "BOB"
//   return winner
// }

console.log(gamingArray([2, 3, 5, 4, 1]))
