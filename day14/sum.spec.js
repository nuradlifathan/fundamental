// sum disini harus sama dengan (liat di sum.js) module.exports = sum
const { sum, myFn } = require("./sum")

test("sum function unit test", () => {
  expect(sum(3, 2)).toBe(5)
})

test("Sum function more than 10 test", () => {
  expect(sum(13, 24)).toBe(37)
})

test("Sum function string input a", () => {
  expect(sum("hello", 7)).toBe("error")
})

test("Sum function string input b", () => {
  expect(sum(7, "hello")).toBe("error")
})

test("myFn unit test", () => {
  expect(myFn()).toBe(0)
})
