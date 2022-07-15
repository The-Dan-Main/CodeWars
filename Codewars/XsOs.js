
/**
 * 
 * @param {string} str 
 */
function XO(str) {
    let arr = str.toLowerCase().split("")
    let out = {
        x: 0,
        o: 0
    }
    for (let letter of arr) {
        if (letter === "o") {
            out.o++
        }
        if (letter === "x") {
            out.x++
        }
    }
    // console.log("o: ",out.o)
    // console.log("x: ",out.x)
    if (out.o === out.x) {
        return true
    } else {
        return false
    }
}

/**
 * way of solving:
 * 1. parse string to lowercase, then split in letters. 
 * 2.declare variable "out" as array with x : 0 , o : 0 as keys&values.
 * 2. for loop through all letter
 * 3. if letter === "o" || letter === "x" --> value++ if the correct key
 * 4. check if values are equal--> then return true : otherwise false
 * 5. Profit ;) 
 * 
 */




console.log(XO("xxXxXOoooo"))