// Diketahui ada 2 array yang memiliki length yang sama
// jumlahkan angka dari kedua array tersebut yang memiliki
// index yang sama, lalu output dalam bentuk array
// arr1 = [1, 3, 7, 9]
// arr2 = [2, 1, 5, 6]
// Output: [3, 4, 12, 15]

// Gampangnya
// arr1 = [1, 3, 7, 9]
// arr2 = [2, 1, 5, 6]

// let total = arr1.map((a, i) => a + arr2[i])
//================================================

arr1 = [1, 3, 7, 9]
arr2 = [2, 1, 5, 6]

let output = []

for (let i = 0; i < arr1.length; i++) {
  let sum = arr1[i] + arr2[i]

  output.push(sum)
}
console.log(output)
