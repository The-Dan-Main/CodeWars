
/**
 * 
 * @param {string} str 
 */
function toCamelCase(str) {
    let array = str.split(/[-_]+/)
    let newArray = []
    array[0].startsWith()
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







const example = "the-stealth-warrior"
const example2 = "The_Stealth_Warrior"
console.log(toCamelCase(example))
console.log(toCamelCase(example2))