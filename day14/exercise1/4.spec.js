const duplicate = require("./4")

test("Valid task 1", () => {
  expect(duplicate("12312")).toBe("32211")
})

test("Valid task 2", () => {
  expect(duplicate("1357")).toBe("7531")
})

test("Valid task 3", () => {
  expect(duplicate("2468013")).toBe("8643210")
})

test("Input is not string", () => {
  expect(duplicate(12345)).toBe("Error : Input has to be string")
})

test("No duplicate characters", () => {
  expect(duplicate("abcde")).toBe("No duplicate characters found")
})
