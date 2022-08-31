// Berikan sebuah input (number 1-100), untuk nilai seorang mahasiswa
// Convert nilai numerical menjadi alphabetical
// 90 - 100 -> A
// 80 - 89 -> B
// 70 - 79 -> C
// 60 - 69 -> D
// 59 > -> F
// Contoh :
// input : 73
// output : "Nilai anda : C"

// && nilai <= (70) berfungsi untuk membatasi nilai menjadi dibawah 70 (&& )
// let nilai = 89
// let result =""

// if (nilai >= 90) {
//     result =" Nilai Anda : A"
// } else if (nilai >= 80){
//     result =" Nilai Anda : B"
// } else if (nilai > 70){
//     result =" Nilai Anda : C"
// } else if (nilai >= 60){
//     result =" Nilai Anda : D"
// } else if (nilai <= 59 && nilai <= 0) {
//     result =" Nilai Anda : F"
// }
// console.log (result)

//=============================================================================
//Cara kak THEO

const numGrade = 73
let alpGrade = ""

if (numGrade >= 90 && numGrade <= 100) {
  alpGrade = "A"
} else if (numGrade >= 80 && numGrade <= 89) {
  alpGrade = "B"
} else if (numGrade >= 70 && numGrade <= 79) {
  alpGrade = "C"
} else if (numGrade >= 60 && numGrade <= 69) {
  alpGrade = "D"
} else if (numGrade <= 59 && numGrade >= 0) {
  alpGrade = "F"
} else {
  alpGrade = "Invalid"
}

console.log(`Selamat, nilai anda: ${alpGrade}`)
//=============================================================================
