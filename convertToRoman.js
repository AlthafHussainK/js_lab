function convertToRoman(num) {
  
  const placeValue = (num, arr = [], factor = 1) => {
    
    if(num){
       const val = (num % 10) * factor;
       arr.unshift(val);
       return placeValue(Math.floor(num / 10), arr, factor * 10);
    };
    return arr;
  };
  let digits = placeValue(num)

  function digitToRoman(d) {
    switch(d) {
      case 1:
        return 'I'
      case 2:
        return 'II'
      case 3:
        return 'III'
      case 4:
        return 'IV'
      case 5:
        return 'V'
      case 5:
        return 'V'
      case 6:
        return 'VI'
      case 7:
        return 'VII'
      case 8:
        return 'VIII'
      case 9:
        return 'IX'
      case 10:
        return 'X'
      case 20:
        return 'XX'
      case 30:
        return 'XXX'
      case 40:
        return 'XL'
      case 50:
        return 'L'
      case 60:
        return 'LX'
      case 70:
        return 'LXX'
      case 80:
        return 'LXXX'
      case 90:
        return 'XC'
      case 100:
        return 'C'
      case 200:
        return 'CC'
      case 300:
        return 'CCC'
      case 400:
        return 'CD'
      case 500:
      return 'D'
      case 600:
        return 'DC'
      case 700:
        return 'DCC'
      case 800:
        return 'DCCC'
      case 900:
        return 'CM'
      case 1000:
        return 'M'      
      case 2000:
        return 'MM'
      case 3000:
        return 'MMM'
      default:
        return ''                            
    }
  }
  let rom = []
  console.log(digits)
  for (let i = 0; i<digits.length; i++){
    rom += digitToRoman(digits[i])
  }
  
  console.log(rom)
 return rom;
}

convertToRoman(3999);