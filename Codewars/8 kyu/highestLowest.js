/**
 * 
 * @param {String} numbers 
 */
function highAndLow(numbers){
    let arr = numbers.split(" ")
    return ""+Math.max(...arr)+" "+Math.min(...arr)
  }


  let example = "1 2 5 4 6 7"

//   highAndLow(example)

  console.log(highAndLow(example))