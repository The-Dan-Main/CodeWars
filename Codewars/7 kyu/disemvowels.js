
/**
 * 
 * @param {string} str 
 * @returns 
 */
function disemvowel(str) {
    return str.replace(/a|e|i|o|u/g,"");
  }

/**
 * way of solving:
 * 1. replace all values within that string with an emtpy letter/string
 *  --> replace() info: /.../ are the opening and closing sides for multiple values
 *  --> replace() info: /.../ each value has to be seperated by "|" sign and be in right case
 *      here is only checked for lowercase, so if both cases would be checked, it would look like this:
 *      /a|e|i|o|u|A|E|I|O|U/
 * 
 *  --> replace() info: /.../g  The /g stand for search global (multiples occurances), 
 *                              otherwise it only checks for the first occurance
 */

  let example = "What are you, a communist?";

  console.log(disemvowel(example))