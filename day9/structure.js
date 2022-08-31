class Stack {
  #maxSize
  #container = []

  constructor(maxSize = 10) {
    this.#maxSize = maxSize
  }

  push(element) {
    this.#container.push(element)
  }

  pop() {
    this.#container.pop()
  }
}
