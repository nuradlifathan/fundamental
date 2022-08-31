// Input sebuah array of strings (word)
// Join array tersebut dengan tanda koma, tapi untuk kata terakhir
// berikan kata "dan" sebelum stringnya
// Contoh
// Input : ["Leci", "Mangga", "Apel", "Jeruk"]
// Output : "Leci, Mangga, Apel, Jeruk, dan Anggur"

//==============================ADLI================
// let arr = ["Jett", "Reyna", "Raze", "Omen si noob"]
// let spasi = arr.join(", ")

// console.log(spasi)
//==================================================

//Cara Kak Theo (susah) pakai loop
// const fruits = ["Leci", "Mangga", "Apel", "Jeruk"]
// let output = ""

// for (let i = 0; i < fruits.length; i++) {
//   if (i === fruits.length - 1) {
//     output += `dan ${fruits[i]}`
//     break
//   }

//   output += `${fruits[i]}, `
// }
// console.log(output)

//=====================Cara EZ==========================
const fruits = ["Leci", "Mangga", "Apel", "Jeruk"]
let output = fruits.slice(0, -1).join(", ")
output += `, dan ${fruits[fruits.length - 1]}`

console.log(output)
