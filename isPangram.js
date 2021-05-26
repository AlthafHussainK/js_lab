const abc = 'abcdefghijklmnopqrstuvwxyz'

const isPangram = (string) => {
  // const processedString = [...new Set(string.toLowerCase().split(' ').join(''))].sort().join('')
  // return abc === processedString

  //regex method
  const regexMatch = new Set(string.toLowerCase().match(/[a-z]/gi))
  return regexMatch.size === 26
}

console.log(isPangram('The quick Brown fox jumps over the lazy DOG'))
console.log(isPangram('abcdefghijklmnopqrstuvwxyz'))