function timeConversion(s) {
  let timeArr = s.slice(0, -2).split(':')
  
  if (s.includes('PM')) {
      if (timeArr[0] === '12') {
          return s.slice(0, -2)   
      }
      timeArr[0] = parseInt(timeArr[0]) + 12
      return timeArr.join(':')
  } else {
     if (timeArr[0] === '12') {
          timeArr[0] = '00'
          return timeArr.join(':')   
      }
      return s.slice(0, -2)
  }
}

timeConversion('07:12:43PM')