
/**
 * 
 * @param {Number} num 
 * @returns 
 */
function squareDigits(num){
    let numbers = num.toString().split("")
    let output = []
    for (let number of numbers) {
        output.push(number*number)
    }
    return parseInt(output.join(""));
  }

let numm = 456421354
console.log(squareDigits(numm))
    