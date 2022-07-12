/**
 * 
 * @param {Array} numbers 
 */
function createPhoneNumber(numbers){
  let first = numbers.slice(0,3).join("")
  let middle = numbers.slice(3,6).join("")
  let last = numbers.slice(6,numbers.length).join("")
  return "("+first+") "+middle+"-"+last
}



let example = [0,1,2,3,2,1,4,5,5,4]
console.log(createPhoneNumber(example))