document.getElementById('fetchForm').addEventListener('submit', submitPost)

async function submitPost(e) {
  e.preventDefault();

  let title = document.getElementById('titleInput').value
  let body = document.getElementById('bodyInput').value

  const options = {
    method: 'POST',
    body: JSON.stringify({title: title, body: body}),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }

  const postPromise = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    options
  )

  const post = await postPromise.json()

  title = post.title
  body = post.body

  document.querySelector('.card-title').innerHTML = title
  document.querySelector('.card-text').innerHTML = body

  document.getElementById('fetchForm').reset()
}