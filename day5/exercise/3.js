// Buat Code Calculate BMI
// Rumus BMI berat / tinggi^2
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”

const bmi = (height, weight) => {
  let bmi = weight / height ** 2

  if (bmi <= 18.5) {
    return "less weight"
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Ideal"
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "Overweight"
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    return "Very Overweight"
  } else if (bmi >= 39.9) {
    return "Obesity"
  } else {
    return "Invalid"
  }
}

console.log(bmi(100, 1.7))
//--------------------------------------------------------
// Cara Kak Theo

// const BMI = (weight, height) => {
//   if (weight <= 0 || height <= 0) {
//     return "Weight dan Height harus lebih dari 0"
//   }

//   let score = weight / height ** 2
//   score = Number(score.toFixed(2))

//   if (score > 39.9) {
//     return score + " || Obesity"
//   } else if (score >= 30 && score <= 39.9) {
//     return "Very overweight"
//   } else if (score >= 25 && score <= 29.9) {
//     return "overweight"
//   } else if (score >= 18.5 && score <= 24.9) {
//     return "ideal"
//   } else if (score < 18.5) {
//     return "less weight"
//   }
// }
// console.log(BMI(70, 1.7))
