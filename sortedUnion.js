function uniteUnique(arr) {
  let newArr = [...arguments]
  
  let joined = [].concat.apply([], newArr)
  let filtered = joined.filter((elm,index) => joined.indexOf(elm) === index)
  
  return filtered;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);