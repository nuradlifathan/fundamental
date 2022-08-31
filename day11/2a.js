/**
 * Jadi function findSingle itu buat nyari angka yang cuma muncul sekali dari dalem array arr
 */

const arr = [4, 5, 4, 6, 6, 7, 7]

const findSingle = (arr = []) => {
  console.log("===Define hashMap/object koson===")
  const hashMap = {}
  console.log("hashMap saat mulai =>", hashMap)
  console.log("=================================")

  console.log(
    "\n=== Mulai looping ke masing2 value arr untuk menghitung berapa kali angka tersebut tercatat di arr==="
  )
  for (let i = 0; i < arr.length; i++) {
    console.log(`=== Start loop ke ${i + 1} ===`)
    let num = arr[i]

    console.log(`\n- value num saat ini => ${arr[i]}`)
    console.log(`- check apakah ada hashMap dengan key == ${arr[i]}`)
    console.log(`  - hashMap di awal loop`)
    console.log(hashMap)

    if (!hashMap[num]) {
      console.log(
        `  - key ${arr[i]} belum terdaftar. Lalu daftarkan key ${arr[i]} dan beri value 1`
      )
      hashMap[num] = 1
    } else {
      console.log(
        `  - key ${arr[i]} sudah terdaftar. Lalu tambahkan 1 pada value dari key ${arr[i]}`
      )
      hashMap[num] += 1
    }

    // console.log(first)
    console.log(`  - hashMap di akhir loop`)
    console.log(hashMap)
    console.log(`\n=== End loop ke ${i + 1} ===`)
  }

  console.log(
    "\n=== Mulai looping ke masing2 key di dalam hashMap untuk mencari key mana yg value-nya 1==="
  )
  console.log(
    "=== Dengan arti lain, angka tersbut cuma tercatat sekali di dalam arr ==="
  )

  for (key in hashMap) {
    console.log(`- key ${key} memiliki value ${hashMap[key]}`)

    if (hashMap[key] === 1) {
      console.log(`  - key ${key} value-nya == 1. Nah ini yang kita cari`)
      console.log(`  - Oke ketemu. Stop pencariannya`)
      return key
    }

    console.log(`  - key ${key} value-nya lebih dari 1, Bukan yang kita cari`)
  }
}

console.log(findSingle(arr))
