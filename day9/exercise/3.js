// Mumble
// Input Sebuah String
// kalau input abc
// outputnya: "ABbCcc"
const mumble = (str) => {
  let letter = str.split("")
  words = []

  for (let i = 0; i < letter.length; i++) {
    words.push(
      letter[i].toUpperCase() + Array(i + 1).join(letter[i].toLowerCase())
    )
  }
  return words.join("")
}

console.log(mumble("abcd"))
