const number = 20

let prevNum = 0, currNum = 1, sum = 0

console.log("Fibonacci Series: ")

for (let i=1; i<number; i++) {
  console.log(prevNum)
  sum = prevNum + currNum
  prevNum = currNum
  currNum = sum
}