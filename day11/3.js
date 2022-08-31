// cari setiap kata jumlah hurufnya berapa aja lalu compare dengan

// const anagram = (a, b) => {
//   //condition if a is anagram return true
//   if (a === b) return true

//   //condition if b not anagram return false
//   if (a.length !== b.length) return false

//   // find every word then compare with another
//   let count = {}

//   for (let word of a) count[word] = (count[word] || 0) + 1

//   // compare with parameter b
//   for (let word of b) {
//     if (!count[word]) return false
//     else --count[word]
//   }
//   return true
// }
// console.log(anagram("rat", "tar"))

//---------------------------------Kak Theo (LIAT LAGI)

// const anagram = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false
//   }

//   const map1 = {}
//   const map2 = {}

//   for (let i = 0; i < str1.length; i++) {
//     const word1 = str1[i]
//     if (!map1[word1]) {
//       map1[word1] = 1
//     } else {
//       map1[word1] += 1
//     }

//     const word2 = str2[i]
//     if (!map2[word2]) {
//       map2[word2] = 1
//     } else {
//       map1[word1] += 1
//     }
//   }
// }

// const anagram2 = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false
//   }
//   const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

//   let result1 = 0
//   let result2 = 0

//   for (let i = 0; i < str1.length; i++) {
//     result1 += alphabet.indexOf(str1[i]) + 1
//     result2 += alphabet.indexOf(str2[i]) + 1
//   }

//   return result1 === result2
// }

// const anagram3 = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false
//   }

//   str1 = str1.split("").sort().join("")
//   str2 = str2.split("").sort().join("")

//   return str1 === str2
// }

// console.log(anagram3("kasur", "rusaa"))
