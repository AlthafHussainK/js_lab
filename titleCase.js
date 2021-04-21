
function titleCase(str) {
  let convertToArr = str.toLowerCase().split(" ")
  let result = convertToArr.map(function(val){
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
  })
  return result.join(" ")
}