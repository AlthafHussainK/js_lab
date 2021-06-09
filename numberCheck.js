function telephoneCheck(str) {
  let onlyNum = str.match(/[0-9]/g)
  let nonNum = str.match(/[^0-9]/g)

  if (onlyNum.length === 10){
    if (str.length == 10) return true
    if (nonNum.join() == ['-','-'].join()) return true
    if (nonNum.join() == ['(', ')', '-']) return true

    return false
  } else if (onlyNum.length === 11){
    if (str[0] == 1) {
      console.log(nonNum.join())
      console.log([' ', '-'])
      if (nonNum.join() == [' ', ' ', ' '].join()) return true
      if (nonNum.join() == ['(', ')', '-'].join()) return true
      if (nonNum.join() == [' ', '-', '-'].join()) return true
      if (nonNum.join() == [' ', '(', ')', ' ', '-'].join()) return true
      if (nonNum.join() == ['(', ')', ' ', '-'].join()) return true
      
      return false
    } else {
      return false
    }
  } else {
    return false
  }
}

telephoneCheck("1 456 789 4444")
