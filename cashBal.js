function checkCashRegister(price, cash, cid) {
  let change = [];
  let diff = cash - price
  
  let rem = diff
  let count, value, bal, changeC
  let cidTotal = 0
  
  let currency = [
    ["ONE HUNDRED", 100], 
    ["TWENTY",20], 
    ["TEN", 10], 
    ["FIVE", 5], 
    ["ONE", 1], 
    ["QUARTER", 0.25],
    ["DIME", 0.1], 
    ["NICKEL", 0.05], 
    ["PENNY", 0.01]
  ] 
  let currencyNum = 8

  for (let i=0; i<currency.length; i++){
    count = parseInt(rem/currency[i][1])
    value = count * currency[i][1]
    bal = cid[currencyNum][1] - value
    cidTotal += cid[currencyNum][1]
    currencyNum--
    if (bal > 0) bal = 0

    changeC = value + bal
    if (changeC != 0){
      change.push([currency[i][0],changeC])
    }
    rem = parseFloat(rem - changeC).toFixed(2)
    if (i == currency.length-1) {
      if (rem != 0){
        return({status: "INSUFFICIENT_FUNDS", change: []})
      } 
      if (cidTotal == diff) {
        return({status: "CLOSED", change: cid})
      }
    } 
  }
  
  let status = { status: "OPEN", change: change }

  return status;
}

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])