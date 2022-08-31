// 1 create a function that accept 2 array of integers
// const twoArr = (arrA, arrB) => {
//   const obj = {}
//   // 2 then looks for number that are in the first array
//   for (let i = arrA.length - 1; i >= 0; --i) {
//     obj[arrA[i]] = arrA[i]
//   }
//   for (let i = arrB.length - 1; i >= 0; --i) {
//     obj[arrB[i]] = arrB[i]
//   }
//   // 3 lalu output sebuah array dari integer yang tidak memiliki kloningan
//   let result = []
//   for (let arrC in obj) {
//     if (obj.hasOwnProperty(arrC)) result.push(obj[arrC])
//   }

//   return result
// }
// console.log(twoArr([3, 2, 1, 4], [4]))

//------------------------Kak Theo
const nonDuplicate = (arr1, arr2) => {
  let resultArr = []

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      resultArr.push(arr1[i])
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      resultArr.push(arr2[i])
    }
  }

  return resultArr
}

console.log(nonDuplicate([3, 2, 1, 4], [4]))
