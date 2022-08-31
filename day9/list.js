class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  add = (element) => {
    let node = new Node(element)

    let current

    if (this.head === null) {
      this.head = node
    } else {
      current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }
    this.size += 1
  }

  printList = () => {
    let current = this.head

    while (current) {
      console.log(current.element, "=>", current.next)
      current = current.next
    }
  }

  insertAt = (element, index) => {
    if (index > this.size || index < 1) {
      throw new Error("Index Invalid!!")
    }

    let node = new Node(element)
    let current = this.head

    if (index === 0) {
      node.next = this.head
      this.head = node
    } else {
      current = this.head
      let prev
      //   let it = 0

      //   while (it < index) {
      //     itt++
      //   }
      for (let i = 0; i < index; i++) {
        prev = current
        current = current.next
      }

      prev.next = node
      node.next = current
    }

    this.size += 1
  }
}

const list = new LinkedList()
list.add("Leci")
list.add("Jeruk")
list.add("Apel")
list.insertAt("Mangga", 1)

list.printList()
// console.log(list)
