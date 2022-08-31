let product = {
  productName: "Kaos",
  price: 10000,
  variant: [
    {
      variantName: "Kaos Putih",
    },
    {
      variantName: "Kaos Hitam",
    },
  ],
}

product = JSON.stringify(product) // mengubah JS Value menjadi JSON String
product = JSON.parse(product) // mengubah JSON String menjadi JS Object
console.log(product.productName)
