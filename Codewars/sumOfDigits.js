/**
 * 
 * @param {Number} n 
 */
function digital_root(n) {
    let sum = Array.from(String(n), Number)
    let total = 0
    sum.forEach(function (numb) {
        total += numb
    })
    while (total > 9) {
        sum = Array.from(String(total), Number)
        total = 0
        sum.forEach(function (numb) {
            total += numb
        })
    }
    return total
  }




  
  let example = 16351465454685795

//   digital_root(example)
  console.log(digital_root(example))