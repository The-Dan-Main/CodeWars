
/**
 * 
 * @param {string} words 
 */
function order(words) {
    let arr = words.split(" ")
    let output = []
    for (let word of arr) {
        for (let i in arr) {
            i++
            if (word.includes(i)) {
                output[i-1] = word
            }
        }
    } return output.join(" ")
}



console.log(order("is2 Thi1s T4est 3a"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
