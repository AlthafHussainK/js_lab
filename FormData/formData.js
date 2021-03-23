const userForm = document.getElementById('userForm')

userForm.addEventListener('submit', function(e) {
  e.preventDefault()

  const formData = new FormData(this)
  const options = {
    method: 'POST',
    body: formData
  }

  fetch('https://httpbin.org/post', options)
    .then(resp => resp.json())
    .then(json => console.log(json.form))
    .catch(err => console.error(err))
})