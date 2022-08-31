/* Function Delcaration */

// function calculateRectangleArea(panjang, lebar) {
//   console.log("Area :" + panjang * lebar)
// }

// calculateRectangleArea(4, 7)
/*-------------------------------------------------------*/
/* Function Expression */

// const calculateSquareArea = function (side = 1) {
//   //   console.log("Area : " + side * side)
//   //    console.log (`${side} x ${side} = ${side * side}`) // ini menampilkan 5 x 5 = 25
//   return side * side
//   console.log("Apa iya?")
// }

// calculateSquareArea(5)

/*-------------------------------------------------------*/
/* Return Statement
function checkNumber(num) {
    if (num === 0) {
      return 'You passed 0, please provide another number.';
    }
  
    return 'Thanks for passing such a nice number.';
  }
*/

// function sumArray(arr1 = [], arr2 = []) {
//   let output = []

//   for (let i = 0; i < arr1.length; i++) {
//     output[i] = arr1[i] + arr2[i]
//   }
//   return output
// }

// let output1 = sumArray([1, 2, 3], [3, 2, 1])
// let output2 = sumArray([4, 5, 6], [7, 8, 9])

// console.log(sumArray(output1, output2))

//------------------------------------------------------------
// Arrow Function (FUNCTION NYA PAKAI INI)

// const sum = (a, b) => a + b         // Atau bisa pakai ini tanpa menggunakan return

const sum = (a, b) => {
  return a + b
}
console.log(sum(5, 5))
