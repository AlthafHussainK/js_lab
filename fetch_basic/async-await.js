
const getData = async() => {
  const response = await fetch('people.json')
  const data = await response.json()

  data.forEach( person => {
    const div = document.createElement('div')
    div.innerHTML = `${person.name}`
    document.body.appendChild(div)
  })
}

getData()