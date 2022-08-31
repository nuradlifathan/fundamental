// Left Rotation

function rotateLeft(d, arr) {
  if (arr.length !== d) {
    for (let i = 0; i < d; i++) {
      const result = arr.shift()
      arr.push(result)
    }
  }
  return arr
}
