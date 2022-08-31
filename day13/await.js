const myPromise = new Promise((resolve, reject) => {
  let isError = true

  if (isError) {
    reject("Process error")
  } else {
    resolve("Process succes!")
  }
})

const myFunction = async () => {
  //   myPromise
  //     .then((res) => {
  //       console.log(res)
  //     }) // akan dijalankan ketika promise resolve (success)
  //     .catch((err) => {
  //       console.log(err)
  //     }) // akan dijalankan ketika promise rejected (error)
  //     .finally(() => {
  //       console.log("Promise Selesai")
  //     }) // akan dijalankan ketika promise selesai (succes maupun error)
  try {
    const result = await myPromise
    console.log(result)
  } catch (err) {
    console.log(err.message)
  } finally {
    console.log("Promise selesai")
  }
}

myFunction()
