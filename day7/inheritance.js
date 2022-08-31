//REVIEW LAGI

class Product {
  productName = ""
  price = 0

  setProductName = (productName) => {
    this.produName = productName
  }

  setPrice = (price) => {
    this.price = price
  }
  getproductName = () => {
    return this.productName
  }
  getPrice = (price) => {
    return this.price
  }
  calculateTax = () => {
    return this.price + this.price * 0.1
  }
}

class Fruit extends Product {
  expDate = ""

  setExpDate = (expDate) => {
    this.expDate = expDate
  }

  getExpDate = () => {
    return this.expDate
  }
  calculateTax = () => {
    return this.price + this.price * 1
  }
}
class Book extends Product {
  author = ""

  setAuthor = (author) => {
    this.author = author
  }

  getAuthor = () => {
    return
  }
}

// const arrProducts = [
//   new Fruit("Leci", 5000, "04 - 08 - 2022"),
//   //   new Product("Harry Potter", 10000),
// ]
const leci = new Fruit()
const book = new Book()

leci.setPrice(10000)
console.log(arrProducts[0].calculateTax())
