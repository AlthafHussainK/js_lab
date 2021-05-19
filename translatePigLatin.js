// simple solution without using regex
function translatePigLatin(str) {
  let arr = str.split('')
  let hasVowel = false
  let noVowel = false
  let index = 0
  for (let i=0; i<arr.length; i++){
    if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u'){
      index = i
      hasVowel = true
      if (index === 0) {
        arr.push('way')
        return arr.join('')
      } 
      break
    }
    noVowel = true
  }
  if(hasVowel || noVowel){
    let sliced = arr.slice(index)
    let newArr = sliced.concat(arr.slice(0,index))  
    newArr.push('ay')
    return newArr.join('')
  } else {
    arr.push('way')
    return arr.join('')
  }
}

translatePigLatin("rhythm");