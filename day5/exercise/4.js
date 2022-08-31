const studentData = (arr = []) => {
  if (!arr.length) {
    // atau juga (arr.length === 0)
    return "Array length harus diatas 0"
  }

  let currentHighest = arr[0]
  let currentLowest = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (currentHighest.score < arr[i].score) {
      currentHighest = arr[i]
    }

    if (currentLowest.score > arr[i].score) {
      currentLowest = arr[i]
    }
  }

  return {
    lowest: currentLowest.score,
    highest: currentHighest.score,
  }
}

const studentArray = [
  {
    studentName: "Doraemon",
    score: 97,
  },
  {
    sudentName: "Naruto",
    score: 53,
  },
  {
    studentName: "Sinchan",
    score: 7,
  },
]

console.log(studentDatas(studentArray))
