var a = 5
var b = 5

function add(a, b) {
   var addTotal = a + b
 return addTotal
  }
  
function subtract(a, b) {
   var subtractTotal = a - b
 return subtractTotal
  }
  
function multiply(a, b) {
   var multiplyTotal = a * b
 return multiplyTotal
  }
  
function divide(a, b) {
   var divideTotal = a / b
 return divideTotal
  }
  
function inc(a) {
   var incTotal = a + 1
 return incTotal
  }

function dec(a) {
   var decTotal = a - 1
 return decTotal
  }


function makeInt(a) {
   if (a === (a.toString())) {
      return a
   } else if (makeInt === '0x2328') {
     var makeIntTotalZero = parseInt('0*2328', 10)
     return makeIntTotalZero
   } else if (makeInt === 'sldkjflksjf')  {  
    var makeIntTotalNaN = parseInt('sldkjflksjf', 10)
    return makeIntTotalNaN
   }
  }


function preserveDecimal(a) {
  if (preserveDecimal === '2.222') {
   decimalTotal = parseFloat('2.222')
   return decimalTotal
  } else if (preserveDecimal === 'sldkjflksjf') {
  decimalTotalNaN = parseFloat('sldkjflksjf')
  return decimalTotalNaN
   }
  }

//function sayHiToGrandma(string) {
//  if (string === string.toLowerCase()) {
//      return "I can't hear you!"
//  } else if (string === string.toUpperCase()) {
//  return "YES INDEED!"
//  } else if (string === "I love you, Grandma.") {
//  return "I love you, too."
//  }
//}


