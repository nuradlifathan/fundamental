// Candies
function candies(n, arr) {
  let sum = 1
  let currentCandies = 1
  let candiesArray = [1]

  for (let i = 1; i < n; i++) {
    const curr = arr[i]
    const prev = arr[i - 1]

    if (curr > prev) {
      currentCandies += 1
    } else {
      currentCandies = 1
    }

    candiesArray.push(currentCandies)
    sum += currentCandies
  }

  currentCandies = 1
  for (let i = n - 2; i >= 0; i--) {
    const curr = arr[i]
    const prev = arr[i + 1]

    if (curr > prev) {
      currentCandies += 1
    } else {
      currentCandies = 1
    }
    if (currentCandies > candiesArray[i]) {
      sum += currentCandies - candiesArray[i]
    }
  }
  return sum
}

console.log(candies(5, [3, 1, 2, 2]))
