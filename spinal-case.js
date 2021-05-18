function spinalCase(str) {
  let regexSpace = /\s+|_+/g
  let regex = /([a-z])([A-Z])/g
  let newStr
  newStr = str.replace(regex, "$1 $2")
  newStr = newStr.replace(regexSpace, '-').toLowerCase()
  console.log(newStr)
  return newStr;
}

spinalCase('thisIsSpinalTap');