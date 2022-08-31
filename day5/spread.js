// Spread itu membuka kurung dari array

// const buah1 = ["Leci", "Apel", "Mangga"]
// const buah2 = ["Jeruk", "Duren", "Duku"]

// console.log(...buah1, ...buah2)

//-----------------------------------------
// Spread dengan Object

const person = {
  fullName: "Naruto",
  age: 17,
}

const person2 = {
  ...person,
  age: 12,
}

console.log(person2)
