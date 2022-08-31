// Mumbling
function accum(s) {
  // create 2 variable define result and lowercase
  const result = []
  s.toLowerCase()

  // first loop
  for (let i = 0; i < s.length; i++) {
    // statement for uppercase
    let mumble = s[i].toUpperCase()
    // 2nd loop
    for (let j = 0; j < i; j++) {
      mumble = mumble + s[i]
    }
    // create method push
    result.push(mumble)
  }
  return result.join("-")
}

console.log(accum("abcd"))
