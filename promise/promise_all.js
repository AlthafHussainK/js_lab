const startTransaction = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, 1000)
  })
}

const initTransaction = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, 500)
  })
}

const lauchVerification = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, 3000)
  })
}

const perfomance = async (label) => {
  const date = new Date()
  console.log(label, `${date.getHours()}:${date.getMinutes()}:${data.getSeconds()}`)
}

(async function(){
  try {
    await perfomance('start')
    const result = await Promise.all([startTransaction(), initTransaction(), lauchVerification()])
    await perfomance('end')
    console.log(result)
  } catch(err) {
    console.log(err)
  }
})()