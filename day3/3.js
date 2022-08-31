// Diketahui ada sebuah array [13, 7, 5, 3, 2]
// Dapatkan hasil akhir jika angka-angka di dalam array
// ditambahkan dan dikurangkan secara bergantian
// 13 + 7 - 5 + 3 - 2
// Output : 16

//ADLI
// const arr = [13, 7, 5, 3, 2]
// let total = 0

// for(i = 1; i < arr.length; i++) {
//     if (total += arr[i]) {

//     } else if (total -= arr[i]){

//     } else if (total += arr[i]) {

//     } else if (total -= arr[i]){

//     }

// }

// console.log(total)

//======================================================================
//KAK THEO
// const arr = [13, 7, 5, 3, 2]
// let total = arr[0]
// let operator = "tambah"

// for(let i = 1; i < arr.length; i++) {
//     if (operator === "tambah") { // boleh memakai == atau juga === artinya sama dengan
//         total += arr[i]
//         operator = "minus"
//     } else if (operator === "minus") {
//         total -= arr[i]
//         operator = "tambah"
//     }
// }
// console.log(total)
//========================================================================
//Cara Fidel
// const arr = [13, 7, 5, 3, 2]
// let total = arr[0]

// for(let i = 1; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//         total += arr[i]
//     } else if (i % 2 !== 0) {
//         total -= arr[i]
//     }
// }
// console.log(total)
