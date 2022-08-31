// Hitung nilai rata2 dalam sebuah array
// input : [13, 7, 5, 3, 2]
// output: "Nilai rata-rata:6"
//ADLI
// let grade = [13, 7, 5, 3, 2]
// let rata = 6

// for (let i = 0; i <= grade.length; i++) {
//     let rata = (grade[i] / grade.length) * grade.length
// }

// console.log(`"Nilai rata-rata:  ${rata}"`)

//======================================================================
// let grade = [13, 7, 5, 3, 2]
// let rata = 0

// for (let i = 0; i < grade.length; i++){
//     grade += (grade[i], 10)
//     grade = rata/grade.length
// }
// console.log("Nilai rata rata : 6" + grade)

//====================================================================
//Kak Theo

const arr = [13, 7, 5, 3, 2]
let average = 0
let total = 0

for (let i = 0; i < arr.length; i++) {
  total += arr[i] // atau total = total + arr[i]
}

average = total / arr.length
console.log(`Nilai rata : rata ${average}`)
