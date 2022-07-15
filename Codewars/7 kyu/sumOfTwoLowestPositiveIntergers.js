
/**
 * 
 * @param {array} numbers 
 */
function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b) => a - b)
    return numbers[0] + numbers[1]
  }



/**
 * way of solving:
 * 1.sort numbers array from low to high
 * 2. return index 0 + index 1 of numbers 
 * 
 * Fun Fact/Achievement for me: 
 * 
 * I wrote this solution without testing and copied it into codewars, hit at "attempt" without testin
 * and it worked on first try!!! such a nice feeling ;)
*/


console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]))

