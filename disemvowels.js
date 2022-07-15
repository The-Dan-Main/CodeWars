
/**
 * 
 * @param {string} str 
 * @returns 
 */
function disemvowel(str) {
    return str.replace(/a|e|i|o|u/g,"");
  }



  let example = "What are you, a communist?";

  console.log(disemvowel(example))