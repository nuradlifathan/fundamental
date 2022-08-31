// const arr = [1, 2, 3, 4, 5]

// arr.forEach((value, idx) => {})

const calculator = (a, b, callback) => {
  callback(a + b)
}

// create function just for display
const displayer = (something) => {
  console.log(something)
}

calculator(5, 5, displayer)
