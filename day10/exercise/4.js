const evenOdd = (num) => {
  let odd = []
  let even = []

  // loop over the input array
  for (let i = 0; i < num.length; i++) {
    // if number is even, then save in variable odd
    if (num[i] % 2 === 0) {
      even.push(num[i])
    } else {
      // if number is odd, then save in variable even
      odd.push(num[i])
    }
  }
  // return odd and even in an object (optional)

  if (odd.length > even.length) {
    return even[0]
  }
  return odd[0]
}

console.log(evenOdd([1, 2, 3]))
