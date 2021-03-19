
const userAuth = () => {
  return new Promise((resolve, reject) => {
          const error = false
    
          if (error){
              reject("No user found")
          }  else {
              resolve("login successful")
          }
  })
} 

userAuth().then( (success) => console.log(success)).catch((error) => console.log(error))