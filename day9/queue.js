class Queue {
  #container = []

  queue = (item) => {
    this.#container.push(item)
  }

  dequeue = () => {
    if (this.#container === 0) return this.#container.shift()
  }

  getElements = () => {
    return this.#container
  }
}

const customers = new Queue()

customers.queue("Adli")
customers.queue("RGS")
customers.queue("Dadi")

console.log(customers.queue())
console.log(customers.getElements())
//Kayanya harus REVIEW lagi
