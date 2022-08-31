// Jawaban dari Kak Theo
class Product {
  productname = 0
  price = 0
  quantity = 0

  constructor(productname, price, quantity) {
    this.productname = productname
    this.price = price
    this.quantity = quantity
  }
}

calcualteTotalPrice = () => {
  return this.price * this.quantity
}

class Transaction {
  cart = []
  total = 0

  addToCart = (product) => {
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
  new Product("Anggur", 7000, 3),
]

// transaction.addToCart(arrProducts[0])
transaction.addToCart(arrProducts[1])

// console.log(transaction)
transaction.checkout()
// transaction.showTotal()

// arrProducts.forEach((value, index) => {
//   console.log(
//     `${index + 1}. Product Name: ${value.productname} (${
//       value.quantity
//     }) || Price: Rp. ${value.tocalCulateTotalPrice().toLocaleString()}`
//   )
// })
