class User {
  username = ""
  email = ""
  #password = ""
  #phoneNumber = ""

  constructor(username, email, password, phoneNumber) {
    this.username = username
    this.email = email
    this.#password = password
    this.#phoneNumber = phoneNumber
  }

  getUserPassword = () => {
    return "*******"
  }

  getPhoneNumber = () => {
    // return this.#phoneNumber.slice(0, -4) + "xxxx"
    return this.#phoneNumber.slice(0, 4) + "x".repeat(this.#phoneNumber.length)
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
    // let splitEmail = this.email.split("@")
    // let email = splitEmail[0]
    // let domain = splitEmail[1]
    // email = email.slice(0, -3) + "xxx"
    // email = email + "@" + domain
    // return email
  }
  // Setters
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
}

const pengguna = new User(
  "doraemon",
  "doraemon@mail.com",
  "abc123",
  "081234321"
)
//Setters
// pengguna.setUsername("nobita")
// console.log(pengguna.username)
//------------------------------------
// console.log(pengguna.getEmail())
//------------------------------------
pengguna.setPassword("abcdefghij")
console.log(pengguna.getUserPassword())
//-----------------------------------
// console.log(pengguna.phoneNumber)
// console.log(pengguna.getPhoneNumber())
