function myReplace(str, before, after) {
  
  let regex = /[A-Z]/g
  let befCap = before.match(regex)
  let repLetter = befCap !== null ? after[0].toUpperCase() : after[0].toLowerCase()
  
  let newAf= after.replace(after[0], repLetter)
  let newStr = str.replace(before, newAf)
  return newStr;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");