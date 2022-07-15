let str = "How can mirrors be real if our eyes aren't real"

String.prototype.toJadenCase = function () {
    let arr = this.split(" ")
    let out = []
    for (let word of arr) {
        out.push(word[0].toUpperCase()+word.slice(1))
    }
    return out.join(" ")
  };

/** 
 * first of all: This can be quite confusing, i was familiar with this kind of function.
 * what we are basically creating is a general "string" function for this document and not a general function.
 * The difference is, that you dor not need further parameters, as the function can only be used on strings
 * and is available to all string after declaration. 
 * 
 * Way of solving: (once understood, what to do, it was simple) instead of a parameter as string, 
 * i had to work with "this" as input.
 * 1. split "this" into array with whitespace as seperator
 * 2. declare output array
 * 3. loop through all words with a "for of"
 * 4. push the updated word to our output array
 *      - first we need to uppercase the first letter
 *      - then we add the rest of the word by "slice" our word from index 1 (without the first letter) to end
 * 5. return our (joined with " " between each word) output array
 * 6. profit ;)
 * 
 * 
 * debug: 
 * - at first i had problems to find the parameter/input and then remembered "this", which always shows you the function/object 
 *   you are working on. Once understood, i just had to change my element, which i wanted to split. 
 * 
 * - at first i pushed the updates words back to arr, which creates an infinity loop, as with every word edited, a new word to edit 
 *   will be pushed to the array of words to edit.... rookie mistake ;)
 * 
 */




str.to


console.log(str.toJadenCase())
