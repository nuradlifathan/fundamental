// * input: [1, -1, 2, 3, 3, 5, 5, 1, 2, 4, 4, -1, 5], output: 5, because 5 exist 3 times
// * input: [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], output: -1, because -1 exist 1 times
// * input: [2, 2, 10, 2, 2, 10, 2], output: 2, because 2 exist 5 times

const findOdd = require("./2")

test("output task 1", () => {
  expect(findOdd([1, -1, 2, 3, 3, 5, 5, 1, 2, 4, 4, -1, 5])).toBe(5)
})

test("output task 2", () => {
  expect(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])).toBe(-1)
})

test("output task 3", () => {
  expect(findOdd([2, 2, 10, 2, 2, 10, 2])).toBe(2)
})

// Kalau Tidak ada Genap
test("No odd occurence", () => {
  expect(findOdd([2, 2, 10, 2, 2, 10])).toBe("No values with odd occurence")
})

test("Value is not array", () => {
  expect(findOdd("hello")).toBe("Error : Invalid input data type")
})

test("Value in array is not number", () => {
  expect(findOdd([1, 2, 2, "test", 1, 2, 1, 1])).toBe(
    "Error : Non-number value detected"
  )
})

test("Value in array is NaN", () => {
  expect(findOdd([1, 1, NaN, 2, 1, 2, 2, 2])).toBe("Error : NaN value detected")
})

test("Value in array is decimal", () => {
  expect(findOdd([1, 1, 3.1, 2, 1, 2, 2, 2])).toBe(
    "Error : Decimal value detected"
  )
})

test("Array is empty", () => {
  expect(findOdd([])).toBe("Error : Array is empty")
})
