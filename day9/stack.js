class Stack {
  #maxItems
  #container = []

  constructor(maxItems = 10) {
    this.#maxItems = maxItems
  }

  push = (item) => {
    if (this.#container.length < this.#maxItems) {
      this.#container.push(item)
      return
    }

    throw new Error("Stack Overflow")
  }

  pop = () => {
    if (this.#container.length) {
      this.#container.pop()
      // this.#container.splice(this.#container.length - 1, 1)
      return
    }

    throw new Error("Stack Underflow")
  }

  getContainer = () => {
    return this.#container
  }
}

const books = new Stack(3)
books.push("Harry Potter")
books.push("Lord of the Rings")
books.push("Sherlock holmes")
books.pop()

console.log(books.getContainer())
