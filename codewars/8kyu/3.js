// Geometry Basics: Distance between 2 Points

/*(const distanceBetweenPoints = (a, b) => {
  return Math.hypot(a.x - b.x, a.y - b.y)
}
console.log(distanceBetweenPoints(1, 2))*/

// Using Class and Constructor

const distanceBetweenPoints = (a, b) => {
  const pointA = a
  const pointB = b

  class Point {
    constructor(x, y) {
      this.x = x
      this.y = y
    }
  }

  const differenceX = pointA.x - pointB.x
  const differenceY = pointA.x - pointB.x
  const Sum = Math.pow(differenceX, 2) + Math.pow(differenceY, 2) // Math.pow adalah pemangkatan
  const distance = Math.sqrt(sum) // Math.sqrt adalah akar kuadrat
  return distance
}
