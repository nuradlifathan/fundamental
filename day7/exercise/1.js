class Product {
  productname = ""
  price = 0
  quantity = 0

  constructor(productname, price) {
    this.productname = productname
    this.price = price
    this.quantity = 0
  }

  calcualteTotalPrice = () => {
    return this.price * this.quantity
  }

  setQuantity = (newQuantity) => {
    if (newQuantity < 1) {
      throw new Error("Quantity harus lebih dari 0")
    }
    this.quantity = newQuantity
  }
}

class Transaction {
  cart = []
  total = 0

  addToCart = (product, newQuantity) => {
    product.setQuantity(newQuantity)

    this.cart.push(product)
    this.total += product.price * product.quantity // atau total = total + product.price * product.quantity
  }

  showTotal = () => {
    console.log(`Total: Rp.${this.total.toLocaleString()}`)
  }

  checkout = () => {
    for (let i = 0; i < this.cart.length; i++) {
      let product = this.cart[i]
      console.log(
        `${i + 1}. ${
          product.productname
        } Rp.${product.price.toLocaleString()} x ${product.quantity} = Rp.${
          product.price * product.quantity
        }`
      )
    }
  }
}

const transaction = new Transaction()

const arrProducts = [
  new Product("Apel", 5000, 1),
  new Product("Mangga", 6000, 2),
  new Product("Duku", 7000, 3),
  new Product("Anggur", 7000, 1),
]

transaction.addToCart(arrProducts[1], 2)
transaction.addToCart(arrProducts[3], 4)
transaction.checkout()
// transaction.showTotal()
// arrProducts[0].setQuantity(-1)
