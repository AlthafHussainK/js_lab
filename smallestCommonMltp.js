
function smallestCommons(arr) {
  arr.sort((a,b) => a-b)
  let low = arr[0], high = arr[1]
  let upperBound = 1
  for (let ij=low; ij<=high; ij++){
    upperBound = upperBound * ij
  }
  
  for(let num = high; num <= upperBound; num+=high){
    let flag = 0
    for (let i=low; i<=high; i++){
      if (num % i !== 0){
        flag = 1 
      } 
    }
    if (flag === 0){
      console.log(num)
      return num
    } 
  }
}

smallestCommons([23, 18]);
