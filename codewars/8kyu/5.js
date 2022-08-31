// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

/*const evenOdd = (number) => {
  if (number % 2 === 0) {
    return "Even"
  } else {
    return "Odd"
  }
}
console.log(evenOdd(2))*/

// Using Ternary Operator

const evenOdd = (number) => {
  return number % 2 ? "Odd" : "Even"
}
