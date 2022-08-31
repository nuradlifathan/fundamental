//  Input N as array
// return element majority of Array
const doubleArr = (arr) => {
  const hashMap = {}

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]

    hashMap[num] = hashMap[num] + 1 || 1
    if (hashMap[num] > arr.length / 2) {
      return num
    }
  }
  return false
}
console.log(doubleArr([2, 2, 1, 1, 1, 2, 2]))
