const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "error"
  }
  return a + b
}

const myFn = () => {
  return 0
}

module.exports = {
  sum,
  myFn,
}
