
/**
 * 
 * @param {string} str 
 */
function toCamelCase(str) {
    let array = str.split(/[-_]+/)
    let newArray = []
    if (str.length > 0) {
        for (let word of array) {
            if (word[0] != word[0].toUpperCase()) {
                newArray.push(word.charAt(0).toUpperCase() + word.slice(1))
            } else {
                newArray.push(word)
            }
        }
        if (array[0].charAt(0) != array[0].charAt(0).toUpperCase()) {
            newArray[0] = array[0]
        }
        return newArray.join("")
    } else return str
}

/**
 * way of solving:
 * 1. split the string into an array by multiple values: /[-_]+/
 *      /.../ are the opening and closing declaration
 *      the square brakets are there to determine symbols, as "" won't work here
 *      in the brakets, the seperators go, in that case "-" and "_"
 *      the "+" after the brakets telling JS to do this for every occurances, not just the first one
 * 
 * 2. create a new array, which we return in the end as a string value
 * 3. check if the string even contains multipes words, as we only need to do something if 
 *    there is more than one words, in that case return the parameter as it is.
 * 
 * 4. loop through each word and check if the first letter of the word is not an uppercase letter
 *      --> if  so: push that word (now with an uppercase first letter) to our output array
 *      --> if not: push the word as it is to the output array
 * 5. now we need to check if the first word originally had an lowercase first letter (as this shall stay this way)
 *      --> check first word in org. array first letter and if it was no uppercase letter, 
 *          replcace the original word to the output array instead of the before updated word
 * 6. now our output array is ready to return after we joined it together as a string
 * 
 * 
 * Debug:
 * - The right way of writing the split function took a lot of research, because i had to respect two seperators
 * - the problem, that if the first word was orignally starting wit a lowercase letter, then it shall stay this way
 *   took me a lot of time to implement, as if you do that before Step 4, it will change again to uppercase.
 * 
 */






const example = "the-stealth-warrior"
const example2 = "The_Stealth_Warrior"
console.log(toCamelCase(example))
console.log(toCamelCase(example2))