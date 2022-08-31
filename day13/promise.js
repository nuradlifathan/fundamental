const myPromise = new Promise((resolve, reject) => {
  let isError = false

  if (isError) {
    reject("Process error")
  } else {
    resolve("Process succes!")
  }
})

myPromise
  .then((res) => {
    console.log(res)
  }) // akan dijalankan ketika promise resolve (success)
  .catch((err) => {
    console.log(err)
  }) // akan dijalankan ketika promise rejected (error)

  .finally(() => {
    console.log("Promise Selesai")
  }) // akan dijalankan ketika promise selesai (succes maupun error)
