
/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns 
 */
function add(x, y) {
    if (x < 0 && y < 0) {
        for (let i = -1; i >= y; i--) {
            console.log("both below zero")
            x--
        } return x
    }
    else {
        for (let i = 1; i <= y; i++) {
            x++
        }
        return x
    }
}

/**
 * way of solving:
 * as i am not allowed to use "+" or "-" // javascript: the Array reduce methods are disabled, along with eval, require, and module
 * 1. check if both values start from below zero
 * 2. if so: loop from -1 to the second input and use x-- everytime, to decrement from the start point
 * 3. if not os: do the opposit, so start at 1 and work your way up until you reach second input
 * --> both conditions loops could as well be written with (let i = 0; i < y; i++) // (let i = 0; i > y; i--)
 *      the only difference is the start point and if < or <=...
 * 4. in both cases return x (which has been decremented or increased)
 * 5. Profit ;)
 */

/** SADLY THIS WAS NOT THE SOLUTION:
 * i had to take a long read into bitwise operators, which are way too complicated for me right now. i believe to understand my solution
 * but not fully yet. to be honest, i had to copy paste a few solutions together to fit my purpose. 
 * Long story short: Numbers are build in bits and when transformed back, you can calulate with them by shifting 1's an 0's.
 */

 function add(x, y) {
    if (y == 0) {
           return x;
       } else {
           return add(x ^ y, (x & y) << 1)
       }
   };
/** 
 * 1. check if the second parameter is equal to zero (bit representation of positiv number), if so, return x
 * 2. otherwise: 
 *      1. use the XOR (^) operator to calculate x (this returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s)
 *      2. then use the Bitwise AND & as y, which returns a bit corresponding to both values
    
 */


console.log(add(5, 19))
console.log(add(-10, -29))

