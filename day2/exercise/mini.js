const arr = [0, null, undefined, '', 2, 3];
let counter = 0

for (let i = 0; i < arr.length; i++){
    if (arr[i]) {
        counter++
    }
}
console.log(counter)


// if (arr[1]) {
//     counter++
//     console.log("truthy")
// }
