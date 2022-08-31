// Most Words
// input sebuah string kalimat
// cari kata terbanyak dalam kalimat
// contoh Input : Aku suka apel karena aku apel
// outputnya : Apel

const mostWords = (str) => {
  const words = str.split(" ")
  let wordMap = {}

  for (let i = 0; i < words.length; i++) {
    let word = words[i]

    if (wordMap[word]) {
      wordMap[word] += 1
    } else {
      wordMap[word] = 1
    }
  }

  let maxKey = ""
  let maxCount = 0

  Object.keys(wordMap).forEach((key) => {
    if (wordMap[key] > maxCount) {
      maxKey = key
      maxCount = wordMap[key]
    }
  })

  return wordMap
}

console.log(mostWords("aku suka apel karena aku apel"))
