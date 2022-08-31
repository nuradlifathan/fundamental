// Write a code to check whethere the number is

//input
let n = 1000

//function
let counterTrue = 0

for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        counterTrue++
    }
}

if (counterTrue == 2) {
    console.log(n, `adalah angka prima`)
} else {
    console.log(n, `adalah bukan angka prima`)
}

