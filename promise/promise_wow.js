const taskW = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('W')
    }, 1000)
  })
}

const taskO = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('O')
    }, 500)
  })
}

const taskExclaim = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('!')
    }, Math.floor(Math.random() * 1000))
  })
}

const taskSmiley = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(':)')
    }, 300)
  })
}

(async function() {
  try {
    let wow = ''
    const taskw = await taskW()
    wow += taskw

    const taskParallel = await Promise.all([taskO(), taskW()])
    wow += taskParallel[0] += taskParallel[1]

    const taskRace = await Promise.race([taskExclaim(), taskSmiley()])
    wow += taskRace

    console.log(wow)


  } catch(err){
    console.log(err)
  }
})()