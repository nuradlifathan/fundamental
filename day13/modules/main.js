// memanggil 1
// const buahBuahan = require("./data")

// console.log(buahBuahan)
// console.log(books)

// jika ingin memanggil 2 object
const { fruits, books } = require("./data")

// jika ingin mengganti
const { fruits: buahBuahan, books } = require("./data")
console.log(buahBuahan)
console.log(books)
