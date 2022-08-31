const largeNum = require("./3")

test("Valid Case 1", () => {
  expect(largeNum(12312)).toBe(32211)
})

test("Valid Case 2", () => {
  expect(largeNum(1357)).toBe(7531)
})

test("Valid Case 3", () => {
  expect(largeNum(2468013)).toBe(8643210)
})

test("input isnt'a number", () => {
  expect(largeNum("12345")).toBe("Error: Invalid input data type")
})

test("input is a decimal", () => {
  expect(largeNum(31.1)).toBe("Error: number cannot be a decimal")
})

test("input is a negative number", () => {
  expect(largeNum(31.1)).toBe("Error: number cannot be a decimal")
})
