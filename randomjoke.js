const apiUrl = "https://api.chucknorris.io/jokes/random"

async function getJoke() {
  const response = await fetch(apiUrl)
  const joke = await response.json()

  console.log(joke.value)
}

getJoke()