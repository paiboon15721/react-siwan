const addCb = (a, b, cb) => {
  setTimeout(() => {
    cb(a + b)
  }, 2000)
}

// addCb(2, 3, function (result) {
//   console.log(result)
// })

const addPromise = (a, b) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000)
  })

// addPromise(2, 5).then((v) => {
//   console.log(v)
// })

const app = async () => {
  const [result1, result2] = await Promise.all([
    addPromise(2, 3),
    addPromise(2, 8),
  ])
  console.log(result1)
  console.log(result2)
}

app()

// const result = add(2, 3)

// console.log(result)
