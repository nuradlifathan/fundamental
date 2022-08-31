// Cara Menampilkan

const book = {
  title: "Harry Potter",
  author: "J.K Rowling", // jika ingin ada spasi harus menggunakan string "author name"
  year: 2010,
  actors: [
    {
      fullName: "Daniel Radcliffe",
      phoneNumber: ["081"],
      speak: () => {
        return {
          greetings: "Halo Indonesia",
          gimmmick: " Nasi goreng",
        }
      },
    },

    {
      fullName: "Emma Watson",
      phoneNumber: ["082"],
    },
  ],
}

// console.log(book.actors[0].phoneNumber[1])

// console.log(book.actors[0].speak()) // memanggil jika ada function

// console.log(book.actors[0].speak().gimmmick) // memanggil gimmick jika ada function

// console.log(book["author"]) // salah satu cara memanggil lagi dengan bracket notation jika object nya string

console.log(book["say hello"]) // memanggil function dengan bracket notation (TONTON LAGI REVIEWNYA)

// console.log(Object.keys(book))
