class CustomSet {
  #container = []

  //   constructor(container) {
  //     this.#container = container
  //   }

  add = (item) => {
    // untuk bandingkan semua item dalam array
    for (let i = 0; i < this.#container.length; i++) {
      if (this.#container[i] === item) {
        //jika ada item dalam array yang sama akan langsung berhenti atau return
        return
      }
    }

    this.#container.push(item)
  }

  delete = (item) => {
    for (let i = 0; i < this.#container.length; i++) {
      if (this.#container[i] === item) {
        this.#container.splice(i, 1)
        return
      }
    }
    throw new Error("Item does not exist!")
  }

  has = (item) => {
    for (let i = 0; i < this.#container.length; i++) {
      if (this.#container[i] === item) {
        return true
      }
    }
    return false
  }

  getElements = () => {
    return this.#container
  }
}

const set = new CustomSet()
set.add("Leci")
set.add("Jeruk")
set.add("Apel")
// set.delete("b")
// console.log(set.getElements())
console.log(set.has("Jeruk"))
