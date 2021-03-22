const userApi = 'https://randomuser.me/api/'

//Promise chaining
document.getElementById('chaining').addEventListener("click", async ()=>{
  
  fetch(userApi).then(response=>response.json()).then(json=>{
      console.log('promise chaining: ', json.results[0].name.first)
      }).catch(err => console.log(err))
})
  
//async/await
document.getElementById('y').addEventListener('click', async () => {
  
  try {

    const response = await fetch(userApi)
    const json = await response.json()
    console.log('async/await:', json.results[0].name.first)
  } catch(err) {
    console.log(err)
  }
  })

  