
/**
 * 
 * @param {String} word 
 * @param {Array} words 
 */
function anagrams(word, words) {
    let originalWord = {}
    let ori = word.split("")
    let output = []

    for (let letter of ori) {
        if (originalWord[letter] == undefined) {
            originalWord[letter] = 1
        } else {
            originalWord[letter]++
        }
    }

    for (let word of words) {
        let testword = {}
        let isEqual = false
        for (let letter2 of word) {
            if (testword[letter2] == undefined) {
                testword[letter2] = 1
            } else {
                testword[letter2]++
            }
        }
        for (let i = 0; i < word.length; i++) {
            let check = Object.keys(testword)[i]
            if (originalWord[check] == testword[check]) {
                isEqual = true
            } else {
                isEqual = false
                break
            }
        }
        if (isEqual === true) {
            output.push(word)
        }
    }
    return output
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))