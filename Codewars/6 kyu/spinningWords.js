

/**
 * 
 * @param {string} string 
 */
function spinWords(string) {
    let output = []
    for (let word of string.split(" ")) {
        if (word.length >= 5) {
            let splitWord = word.split("")
            let newWord = ""
            for (let letter of splitWord) {
                newWord = letter + newWord
            }
            output.push(newWord)
        }
        else { output.push(word) }
    }

    return output.join(" ")
}



// push each word into array
// iterate through array and if a word has more than 5 digits:
// break word into array, reverse the order of all elements and the joyn it together
// then push back to output

console.log(spinWords("Welcome"), "// emocleW");
console.log(spinWords("Hey fellow warriors"), "// Hey wollef sroirraw");
console.log(spinWords("This is a test"), "// This is a test");
console.log(spinWords("This is another test"), "// This is rehtona test");
console.log(spinWords("You are almost to the last test"), "// You are tsomla to the last test");