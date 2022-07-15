

/**
 * 
 * @param {string} str 
 */
 function isIsogram(str){
    let arr = str.toLowerCase().split("")
    let newSet = [...new Set(arr)]
    // console.log("Arr: ",arr.join(""))
    // console.log("New: ",newSet.join(""))
    if (newSet.length === arr.length) {
        return true
    } return false
  }



/** 
 * way of solving:$
 * 1. parse str to lowercases, as cases shall be ignored and then split each letter it into an array
 * 2. create new Set (this will ignore possible dublicates and creates a "unique" array)
 * 3. check if the lengths of the old and the new array matches (if not, a dublicate has been erased)
 * 4. return correct value based on that condition
 * 5. Profit ;)
 * 
 * 
 * Debug:
 * - when creating new Set, make sure to add "..." before within the square brakes.
 * - the question is if the word has no dublicates in it, so true === no dublicates
 * 
 *  
 */

  console.log(isIsogram("coMmunist"))
  console.log(isIsogram("coMmuunist"))
  console.log(isIsogram("coMdmunist"))
  console.log(isIsogram("cioMmunist"))
  console.log(isIsogram("coMmummmnist"))
  console.log(isIsogram("coMmiunist"))