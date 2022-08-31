// ada array of int
// setiap element muncul 2 kecuali 1 elemen
// cari elemen yang muncul hanya 1x

const singleArr = (arr) => {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i])) result.push(arr[i])
  }
  return result
}
console.log(singleArr([2, 2, 1]))

//---------------------Kak Theo------------------------
const findSingle = (arr = []) => {
  const hashMap = {}

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (!hashMap[num]) {
      hashMap[num] = 1
    } else {
      hashMap[num] += 1
    }
  }

  // key mengambil property di dalam hashMap
  for (key in hashMap) {
    if (hashMap[key] === 1) {
      return key
    }
  }
}

console.log(findSingle([2, 2, 1]))
