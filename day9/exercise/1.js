// Palindrome Reverse

const palindrome = (num) => {
  let palindrome = num
  let reverse = 0

  while (palindrome > 0) {
    let digitakhir = palindrome % 10
    reverse = reverse * 10 + digitakhir

    palindrome = Math.floor(palindrome / 10)
  }

  if (reverse === num) {
    return true
  }

  return false
}
console.log(palindrome(54321))
