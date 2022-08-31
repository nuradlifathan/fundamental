function kangaroo(x1, v1, x2, v2) {
  let result = "NO"
  for (let i = 0; i < 10000 && result == "NO"; i++) {
    if (x1 + v1 * i == x2 + v2 * i) {
      result = "YES"
    }
  }
  return result
}

//--------------------------------------------------------
function kangaroo(x1, v1, x2, v2) {
  // if kangaroo ar on the same spot
  if (x1 == x2) return "YES"

  //if the 1st kangaroo jump of the 2nd kangaroo
  if (x1 > x2) return "NO"

  //if kangaroo 2 is going faster than kangaroo1
  if (v2 > v1) return "NO"

  // if the kangaroo have same velocity
  if (v1 == v2) return "NO"

  // callback kangaroo() again and add it
  x1 += v1
  x2 += v2
  return kangaroo(x1, v1, x2, v2)
}
