/**
 * "Numbers are not in order"
 * @param {number} a : "number a "
 * @param {number} b : "number b "
 */
function getSum(a, b) {
    let output = 0;
    let lowerNUmber = Math.min(a, b)
    let higherNumber = Math.max(a, b)
    if (a === b) {
        return lowerNUmber
    }
    for (let i = lowerNUmber; i <= higherNumber; i++) {
        output += i;
    }
    return output;
}

/**
 * way of solving:
 * 1. declare output and set it to 0
 * 2. declare lowernumber with Math.min
 * 3. declare highernumber with Math.max
 * 3.1 check if numbers are equal, then return lower number 
 * 4. for loop from lower to higher number
 * 5. add index to output
 * 6. return output
 */

console.log(getSum(0, 4))
console.log(getSum(-1, 2))
console.log(getSum(10, 10))