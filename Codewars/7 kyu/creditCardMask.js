/**
 * 
 * @param {string} cc 
 */
function maskify(cc) {
    let out = cc.split("")
    for (let i = 0; i < out.length -4; i++) {
        out[i] = "#"
    }
    return out.join("")
}


/**
 * way of solving:
 * --> as there are different solution comming to my mind, i will do the easier (for me, as i like working with arrays) first:
 * 1. declare output array and put the parameter in there, then split each letter/number
 * 2. with a for in loop, i go through each element from the start of the array to the end -4 (as i want the last four elements to stay)
 * 3. return the joined array
 * 4. Profit ;)
 */



/**
 * 
 * @param {string} cc 
 */
 function maskify(cc) {
    let counter = cc.length -4;
    let last = cc.slice(-4)
    let masked = "#".repeat(counter)
    return masked+last
}

/* 
 * Second Way of solving:
 * 1. declare "counter" to determine, what is the length of the parameter string minus the last four digits
 * 2. declare "last" and slice from index 0 to -4, to get the last four digits
 * 3. declare "masked" and assign .repeat() with "#" and the "counter" as number
 * 4. return masked + last 
 */


console.log(maskify("4556364607935616"))
console.log(maskify("Nananananananananananananananana Batman!"))