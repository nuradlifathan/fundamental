//find missing angle in triangle
const missingTriangle = (sudut1, sudut2, totalSudut = 180) => {
  return totalSudut - sudut1 - sudut2
}

console.log(missingTriangle(50, 30))
