
/**
 * 
 * @param {array} numbers 
 * @param {number} target 
 */
function twoSum(numbers, target) {
    let arr = []
    for (let i in numbers) {
        for (let j in numbers) {
            if (numbers[i]+numbers[j] === target && i !== j) {
                // console.log("Found match: ",numbers[i]," and ",numbers[j]," for Target: ",target)
                arr.push(parseInt(i),parseInt(j)) 
                return arr
            }
        }
    }
  }



  /**
   * way of solving:
   * 1.declare output array
   * 2. loop through each value of numbers parameter
   * 3. withing that loop, go again over all value of numbers parameter, so we can compare each value with every other value in numbers.
   * 4. compare each value and make sure, that not the same indexes are compared with each other
   * 5. push now the indexes of the matches to our output array and for this way of writing i had to parse them into numbers
   * 6. return our output array
   * 7. profit ;)
   * 
   * 
   * 
   * 
   * debug:
   * - i had to parse the i & j from string to number, as they are getting declared like this.
   * - i had to put the return just right after the push, as otherwise, i would get the second matches as well (0,1) and (1,0)
   * - i had to put the && statement in there, as it was calculating the same indexes on top of each other, which matched.
   *    Therefore i needed to create the condition, that btoh index shall not be the same, before comparing the values of that indexes.
   */



  console.log(twoSum([2, 2, 3],4))
  console.log(twoSum([2, 3, 1],4))