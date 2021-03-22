//async with error handling
async function getPost() {
  const postPromise = await fetch('https://jsonplaceholder.typicode.com/posts')

  if(postPromise.ok){
    const posts = await postPromise.json()
    let html = ""

    posts.slice(0,5).forEach((post) => {
      const title = post.title
      const body = post.body
      html += `
        <div class='post'>
          <h3>${title}</h3>
          <p>${body}</p>
        </div>
      `
    })
    document.body.innerHTML = html
  } else {
    console.error(`Error: ${postPromise.status}`)
  }
}

getPost()