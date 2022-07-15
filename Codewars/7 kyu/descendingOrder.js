
/**
 * 
 * @param {Number} n 
 */
function descendingOrder(n){
    let out = n.toString().split("").sort().reverse().join("")
    return parseInt(out)
  }



  let number = 1235468751;
  console.log(descendingOrder(number))