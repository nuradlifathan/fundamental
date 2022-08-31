// Multiplies of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

function solution(number = 9) {
  let total = 0

  for (let i = 0; i <= number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      total += i
    }
  }
  return total
}
console.log(solution())

// ---------------------------------------------------

function solution(number) {
  var sum = 0
  while (number > 0) {
    number--
    sum += !(number % 3) ? number : !(number % 5) ? number : 0
  }
  return sum
}
