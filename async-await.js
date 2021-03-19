const photos = []

async function uploadPhoto() {
  let uploadStatus = new Promise ( (resolce, reject) => {
    setTimeout( () => {
      photos.push('Profile Pic')
      resolve("Photo uploaded")
    }, 3000)
  })

  let result = await uploadStatus;
  
  console.log(result)
  console.log(photos.length)
}

uploadPhoto()