
/**
 * 
 * @param {string} s1 
 * @param {string} s2 
 */
function longest(s1, s2) {
    let output = s1.concat(s2).split("")
    output = [...new Set(output)]
    return output.sort().join("")
  }




  /**
   * way of solving:
   * 1. delcare output variable and assign: combine both strings and split into array
   * 2. assign new Set array of output array
   * 3. return array.sort() and join it together
   * 4. profit ;)
   * 
   */

   let a = "xyaabbbccccdefww"
   let b = "xxxxyyyyabklmopq"

  console.log(longest(a,b))