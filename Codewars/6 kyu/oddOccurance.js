/**
 * 
 * @param {Array} A 
 * @returns 
 */

function findOdd(A) {
    let occurances = A.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
    console.log(occurances)
    for (let value in occurances) {
        if (occurances[value] %2 !== 0) {
            return parseInt(value)
        }
    
    }
  }


  let example = [1,2,2,1,1,1,1,2,1,4,6,6,4,2,1]
  console.log(findOdd(example))