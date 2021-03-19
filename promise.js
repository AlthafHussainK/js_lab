// Promise

const buyFlightTicket = () => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      const error = true

      if(error) {
        reject("Sorry! Your payment failed")
      } else {
        resolve("Payment is Successful")
      }
    }, 3000)
  })
}

buyFlightTicket().then( (success) => console.log(success)).catch( (error) => console.log(error))