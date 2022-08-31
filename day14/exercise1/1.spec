const findEven = require("./1")

// Input 1
test("Validasi Output Task 1", () => {
  expect(findEven([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8])
})

// Input 2
test("Validasi Output Task 2", () => {
  expect(findEven([-1, -2, 3, -4, -5, 6, -7, -8])).toEqual([-2, -4, 6, -8])
})

// Input 3
test("Validasi Output Task 3", () => {
  expect(findEven([-15, 3, 41, -52, 6, 121, -100])).toEqual([-52, 6, -100])
})

// Error Case : Input must Array (string)
test("Input must Array (string)", () => {
  expect(findEven("12345")).toBe("Error: Invalid input data type")
})

// Error Case : Input must Array (number)
test("Input must Array (number)", () => {
  expect(findEven(12345)).toBe("Error: Invalid input data type")
})

// Error Case : Input must Array (non-number = NaN)
test("Input must Array (NaN)", () => {
  expect(findEven([1, 2, 3, NaN, 9, 10])).toBe(
    "Error: Non-number data detected"
  )
})

// Error Case : Input must Array (decimal / float)
test("Input must Array (decimal/float)", () => {
  expect(findEven([1, 2, 3.5, 9, 10])).toBe("Error: Decimal value detected")
})

// Input must Even number in Arrawy
test("Input must have Even in Array", () => {
  expect(findEven([1, 3, 5, 7])).toBe("No even values detected")
})
