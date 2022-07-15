
// /**
//  * 
//  * @param {array} a 
//  * @param {array} b 
//  */
// function arrayDiff(a, b) {
//     if (a.length > 0 || b.length > 0) {
//         for (let i in b) {
//             for (let j in a) {
//                 if (a[j] === b[i]) {
//                     a.splice(j, 1)
//                 }
//             }
//         } return a
//     } else {
//         return a
//     }
// }

/**
 * 
 * @param {array} a 
 * @param {array} b 
 */
function arrayDiff(a, b) {
    if (a.length > 0 || b.length > 0) {
        for (let i in b) {
            for (let j in a) {
                while (j < a.length) {
                    if (a[j] === b[i]) {
                        a.splice(j, 1)
                    }
                    j++
                }

            }
        } return a
    } else {
        return a
    }
}

/**
 * Way of solving:
 * 1. for in loop through all elements of a
 * 2. check/compare them with b[0]/b.join("") (does not matter, as long as b is not emtpy --> && this in the condition)
 *  2.1 update: if a/b is empty --> return a as it is, as nothing shall change
 *  2.2 update regarding b: add second loop to iternate over b as well for the comparment.
 * 3. if match, then a[i] = "" to delete or .splice(i,1)
 * 4. return a
 * 
 * 
 * debug:
 * - had to add a while loop to compare value of index j multiples time to value of index, otherwise, it will not delete a value
 *      if the value has occured before
 * 
 * --------------------------------------------------------------------------
 * the better solution is to filter a with all values of B. like here, but it is a bit tricky to understand:
 * 
 *      function array_diff(a, b) {
 *          return a.filter(e => !b.includes(e));
 *          }
 * 
 * 
 * 
*/

// console.log(arrayDiff([1, 2, 2], [1]))
// console.log(arrayDiff([1, 2, 2, 3, 4], [1, 3]))

console.log(arrayDiff([10, -16, -4, 19, -15, -2, 14, -4, -2, -5, -1, -11, 10, 1, 5, 10, 10], [10, -16, -4, 19, -15, -2, 14, -4]))