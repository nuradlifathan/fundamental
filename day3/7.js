// Terima sebuah input (number), lalu jumlahkan setiap digit
// yang ada dalam number tersebut
// Input : 19573
// Output : 25 (1 + 9 + 5 + 7 + 3)

// 1 ubah input jadi string
// 2 ubah string menjadi array ["1", "9", "5", "7", "3"]
// 3 jumlahkan setiap index dengan index lainnya dengan Numbeer(arr[i])

let input = 19573 // atau (19573).toString()
input = input.toString()
input = input.split("")
let total = 0

for (let i = 0; i < input.length; i++) {
  total += Number(input[i])
}

console.log(total)
