// const staircase = (n) => {
//   const arr = [1, 1]

//   if (n > 1) {
//     for (let i = 2; i <= n; i++) {
//       arr[i] = arr[i - 1] + arr[i - 2]
//     }
//   }

//   return arr[arr.length - 1]
// }
// console.log(staircase(-2))
//https://javascript.plainenglish.io/algorithms-101-climbing-stairs-in-javascript-c8dec14cb2f6

const staircase2 = (n) => {
  let first = 1
  let second = 2

  while (--n) {
    second = first + second
    first = second - first
  }
  return first
}
console.log(staircase2(5))

// -------------------------Kak Theo
const climbStairs = (n) => {
  if (n == 1) return n
  if (n == 2) return n

  let fib = [1, 1]

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }

  return n
}
console.log(staircase2(5))
