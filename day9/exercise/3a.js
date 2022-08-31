const mumble = (str) => {
  let result = ""

  for (let i = 0; i < str.length; i++) {
    result += str[i].toUpperCase()

    for (let j = 0; j < i; i++) {
      result += str[i].toLowerCase()
    }
  }
  result
}

console.log(mumble("abcd"))
