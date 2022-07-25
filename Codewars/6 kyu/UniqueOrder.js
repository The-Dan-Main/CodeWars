
/**
 * 
 * @param {string} iterable 
 */
var uniqueInOrder = function (iterable) {
    let output = []
    if (typeof iterable == "string") {
        iterable = iterable.split("")
    }
    let prev;
    let current;
    for (let i of iterable) {
        current = i;
        if (current !== prev) {
            output.push(i)

        }
        prev = i;
    }
    return output
}





console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))
