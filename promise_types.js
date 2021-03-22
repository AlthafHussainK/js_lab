function successPromise() {
  return new Promise((resolve, reject) => {
    resolve('success')
  })
}

function rejectedPromise() {
  return new Promise((resolve, reject) => {
    reject(new Error('here is error'))
  })
}

function pendingPromise() {
  return new Promise((resolve, reject) => {
    const interval = setInterval( () => console.log('pending'), 1000)
    setTimeout( () => {
      clearInterval(interval)
      resolve('success after 4 seconds')
    }, 4000)
  })
}

(async function() {
  try {
    const result = pendingPromise()
    console.log(result)
  } catch(err) {
    console.log(err)
  }
})()