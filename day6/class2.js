//Class Constructor

// class Student {
//   fullName = "" // this
//   age = 0 // this

//   constructor(fullName, age) {
//     this.fullName = fullName
//     this.age = age
//   }

//   //   greeting = () => {
//   //     console.log("Good Morning!")
//   //   }
// }

// // const siswa = new Student("Nobita", 15)
// // const siswi = new Student("Shizuka", 15)

// const arrStudents = [
//   new Student("Nobita", 15),
//   new Student("Shizuka", 17),
//   new Student("Seto", 19),
// ]

// console.log(arrStudents)

//---------------------------------------------------------------------------

//Exercise (DITONTON LAGI)
// Student Name: Nobita || Age: 12

class Student {
  fullName = "" // this
  age = 0 // this

  constructor(fullName, age) {
    this.fullName = fullName
    this.age = age
  }
  greeting = () => {
    console.log("Good Morning, " + this.fullName)
  }
}

// class addShow {

// }

const siswa = new Student()
const arrStudents = [
  new Student("Nobita", 15),
  new Student("Shizuka", 17),
  new Student("Seto", 19),
]

arrStudents[0]
// console.log(arrStudents[1].greeting())
console.log(show())

// for (let i = 0; i < arrStudents.length; i++) {
//   console.log(
//     `Student name: ${arrStudents[i].fullName} || Age: ${arrStudents[i].age}`
//   )
// }
