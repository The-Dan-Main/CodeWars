
/**
 * 
 * @param {string} s 
 * @returns 
 */
function findShort(s){
    let arr = s.split(" ")
    let out = []
    for (let word of arr) {
      out.push(word.length)
    }
    return Math.min(...out)
  }

  console.log(findShort("Let's travel abroad shall we"))

  /**
   * Way of solving: 
   * 1. make string to array
   * 2. create output array for the lengths of each word
   * 3. loop through each word and push the lenght in the output array
   * 4. return the smallest number of the output array
   * 5. Profit ;)
   * 
   * Debug: when working with Math.min() and you put an array in there, 
   *        make sure to add ... before the array-name
   */