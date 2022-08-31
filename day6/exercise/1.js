// Output Product Name: Apel (3) || Price: Rp. 10,000 (pakai toLocaleString)

class Product {
  productName = ""
  price = 0
  quantity = 0

  constructor(productName, price, quantity) {
    this.productName = productName
    this.price = price
    this.quantity = quantity
  }
}

const arrProducts = [
  new Product("Apel", 1000, 2),
  new Product("Mangga", 2000, 2),
  new Product("Duku", 3000, 3),
  new Product("Jambu", 4000, 4),
  new Product("Pisang", 5000, 5),
]

// arrProducts.forEach((value, index) => {
//   console.log(value)
// })
//=================================================================================
arrProducts.forEach((value, index) => {
  console.log(
    `${index + 1}. Product Name: ${value.productName} (${
      value.quantity
    }) || Price: Rp. ${value.price.toLocaleString()}`
  )
})
//=================================================================================
// for (let i = 0; i < arrProducts.length; i++) {
//   console.log(arrProducts[i])
// }
//=================================================================================
// for (let i = 0; i < arrProducts.length; i++) {
//   let product = arrProducts[i]
//=================================================================================
//   console.log(
//     `${i + 1}. Product Name: ${arrProducts[i].productName} (${
//       product.quantity
//     }) || Price: Rp. ${product.price.toLocaleString()}`
//   )
// }
