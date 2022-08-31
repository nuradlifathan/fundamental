// let buah = ["Apel", "Mangga", "Jeruk", "Anggur" , "Semangka", "Durian"]  //cara BUAT array
// console.log(buah[1], buah[2])                    //cara AKSES array
// buah[0] = "Leci"                             // MENGGANTI isi APEL menjadi LECI
// console.log(buah)
// console.log(buah.length)                     // length  di array menghitung jumlah index array nya bukan string
// console.log(buah[buah.length - 1])
// buah[buah.length] = "Lengkeng"               // menambah item dalam array
// buah.push("Jambu")                           // 2 menambah item dalam array dengan .push
// buah.pop()                                    //menghapus item akhir dengan pop()
// buah.shift()                                     //menghapus item awal dengan shift()
// buah.splice(2, 2, "Jojo")                       // menghapus item tengah dengan splice(target index, jumlah yang mau dihapus, replace mengganti nama item)

// console.log(buah.slice(0, 3))                   //slice menginput dari item 0 sampai sebelum 3
// console.log(buah.toString())                       // menghubah variable buah = array menjadi STRING

// let buahString ="selamat"
// console.log(buahString.split("a"))              // meng-indexkan sendiri huruf a pada selamat

// for (let i = 0; i < buah.length; i++) {          //rumus loop
//     console.log(buah[i])
// }

//output
// 1 "ganjil"
// 9 "ganjil"
// 4 "genap"
// 2 "genap"
// 3 "ganjil"
// 7 "ganjil"

//EXERCISE
// let arrNum = [1, 9, 4, 2, 3, 7]

// for (let i = 0; i <= arrNum.length; i++) {
//     let angka = arrNum[i]
//     if (angka % 2 === 0){
//         console.log(angka, "genap")
//     } else {
//         console.log(angka, "ganjil")
//     }
// }

//=============================================================

// output
// "ganjil", [1, 9, 3, 7]
// "genap", [4, 2]

// let arrNum = [1, 9, 4, 2, 3, 7]
// let ganjil = arrNum.push["1"]

// for (let i = 0; i < arrNum.length; i++) {
//     let angka = arrNum[i]
//     if  (angka % 2 === 0){
//         console.log(angka, "genap")
//     } else {
//         console.log(angka, "ganjil")
//     }
// }

// let arrNum = [1, 9, 4, 2, 3, 7]
// let arrGanjil = []
// let arrGenap = []

// for (let i = 0; i < arrNum.length; i++) {
//     let angka = arrNum[i]
//     if  (angka % 2 === 0){
//         arrGenap.push(angka)
//     } else {
//         arrGanjil.push(angka)
//     }
// }

// console.log("ganjil", arrGanjil)
// console.log("genap", arrGenap)

//=============================================
// ganjil, [jeruk]
// genap, []

// let buah = ["Apel", "Mangga", "Jeruk", "Anggur" , "Semangka", "Durian"]
// let buahGanjil = []
// let buahGenap = []

//  for (let i = 0; i < buah.length; i++) {
//         let jumlah = buah[i].length
//         if  (jumlah % 2 === 0){
//             buahGenap.push(buah[i])
//         } else {
//             buahGanjil.push(buah[i])
//         }
//     }

// console.log("ganjil", buahGanjil)
// console.log("genap", buahGenap)

//========================EXERCISE====================
//input (jam)
//harga parkir 2 jam pertama -> 5000
//harga parkir per jam seterusnya -> 2000
//harga parkir max -> 30000
//output: "Tarif parkir anda sebesar 9000"

// let inputJamParkir = 500
// let harga2JamPertama = 5000
// let hargaPerJam = 2000
// let hargaMax = 30000
// let total = 0

//Cara 1
// if (inputJamParkir <= 2) {
//     console.log(`Tarif Parkir anda sebesar Rp ${harga2JamPertama}`)
// } else  {
//     total = harga2JamPertama + (inputJamParkir -2) * hargaPerJam
//     if (total > hargaMax){
//         total = hargaMax
//     }
//     console.log(`Tarif parkir anda sebesar Rp ${total}`)
// }

//CARA 2

// if (inputJamParkir <= 2) {
//     total = harga2JamPertama
// } else  {
//     total = harga2JamPertama + (inputJamParkir -2) * hargaPerJam

//     }
//     if (total > hargaMax){
//         total = hargaMax
// }

// console.log(`Tarif parkir anda sebesar Rp ${total}`)

//========================================================================
