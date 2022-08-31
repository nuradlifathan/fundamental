// Price dan Quantity di Kali dengan Format baru

class Product {
  productName = ""
  price = 0
  quantity = 0
  //   total = 0

  constructor(productName, price, quantity) {
    this.productName = productName
    this.price = price
    this.quantity = quantity
    // this.total = price * quantity
  }
  totalPrice = () => {
    return this.price * this.quantity
  }
}

const arrProducts = [
  new Product("Apel", 1000, 1),
  new Product("Mangga", 2000, 2),
  new Product("Duku", 3000, 3),
  new Product("Jambu", 4000, 4),
  new Product("Pisang", 5000, 5),
]

// dengan nambahin property (total)
// arrProducts.forEach((value, index) => {
//   console.log(
//     `${index + 1}. Product Name: ${value.productName} (${
//       value.quantity
//     }) || Price: Rp. ${value.total.toLocaleString()}`
//   )
// })

// dengan membuat method baru (line 15 - 17)
arrProducts.forEach((value, index) => {
  console.log(
    `${index + 1}. Product Name: ${value.productName} (${
      value.quantity
    }) || Price: Rp. ${value.tocalCulateTotalPrice().toLocaleString()}`
  )
})
