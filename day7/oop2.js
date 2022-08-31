// Ini Exercise Setters Phone Number tidak boleh lebih dari 13 atau kurang dari 10
class User {
  username = ""
  email = ""
  #password = ""
  #phoneNumber = ""

  constructor(username, password) {
    this.username = username
    this.#password = password
  }

  getUserPassword = () => {
    return this.#password
  }

  getPhoneNumber = () => {
    // return this.#phoneNumber.slice(0, -4) + "xxxx"
    if (this.#phoneNumber) {
      return (
        this.#phoneNumber.slice(0, 4) + "x".repeat(this.#phoneNumber.length - 4)
      )
    }
    return "Phone Number belum terisi"
    // return this.#phoneNumber
  }

  getuUsername = () => {
    return this.username
  }

  //getEmail
  // Output: dorae***@mail.com
  getEmail = () => {
    // return this.email.slice(0, 4) + "xxx" + this.email.slice(8)
    // return this.email.substring(0, 1) + "xxx" + this.email.substring(i + 1)
    //------------------------------------------------------------------------

    if (!this.email) {
      return "Email belum terisi"
    }

    let splitEmail = this.email.split("@")
    let email = splitEmail[0]
    let domain = splitEmail[1]

    email = email.slice(0, -3) + "xxx"
    email = email + "@" + domain

    return this.email
  }
  // Setters
  setEmail = (newEmail) => {
    newEmail = newEmail.toLowerCase()
    if (!newEmail.includes("@") || !newEmail.includes(".com")) {
      // kalau negatif
      console.log("Format email tidak valid")
      return
    }

    this.email = newEmail
  }
  setUsername = (newUsername) => {
    this.username = newUsername
  }

  setPassword = (newPassword) => {
    if (newPassword.length < 8) {
      console.log("Password anda lemah")
      return
    }
    this.#password = newPassword
  }
  setPhoneNumber = (newPhoneNumber) => {
    if (newPhoneNumber.length < 10 || newPhoneNumber.length > 13) {
      console.log("Phone Number anda kurang 10 digit")
      return
    }
    this.#phoneNumber = newPhoneNumber
  }
}

const pengguna = new User("doraemon")
//Setters
// pengguna.setUsername("nobita")
// console.log(pengguna.username)
//------------------------------------
pengguna.setEmail("doraemon@mail.com")
console.log(pengguna.getEmail())
//------------------------------------
// pengguna.setPassword("abcdefghij")
// console.log(pengguna.getUserPassword())
//-----------------------------------
// pengguna.setPhoneNumber("12345678910")
// console.log(pengguna.getPhoneNumber())
//---------------------------------------------
// console.log(pengguna.getPhoneNumber())
