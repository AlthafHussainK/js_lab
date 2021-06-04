function rot13(str) {
  let arr = str.split('')
  let decryptArr = []
  let regex = /[^A-Z]/g
  for(let i=0; i<arr.length; i++){
    if (arr[i].match(regex)){
      decryptArr.push(arr[i])
    } else {
      let charCode = arr[i].charCodeAt()
      let updated = (charCode % 26) + 65
      decryptArr.push(String.fromCharCode(updated))
      
    }
  }
  let decryptedStr = decryptArr.join('')
  console.log(decryptedStr)
  return decryptedStr;

}

rot13("SERR CVMMN!");