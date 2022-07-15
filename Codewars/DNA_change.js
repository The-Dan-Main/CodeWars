
/**
 * 
 * @param {string} dna 
 */
// function DNAStrand(dna) {
//     let arr = dna.split("")
//     for (let i in arr) {
//         if (arr[i] === "A") {
//             arr[i] = "T"
//         } else
//             if (arr[i] === "T") {
//                 arr[i] = "A"
//             } else
//                 if (arr[i] === "G") {
//                     arr[i] = "C"
//                 } else
//                     if (arr[i] === "C") {
//                         arr[i] = "G"
//                     }
//     }
//     return arr.join("")
// }


var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(a){ return pairs[a] }).join('');
}

console.log(DNAStrand("ATTGC"))


/**
 * ways of solving:
 * FIRST WAY:
 * 1.split parameter
 * 2. loop through each letter 
 * 3. check if the letter is "A", then replace with "T" in the array itself (and the other way around)
 * 4. check if the letter is "C", then replace with "G" in the array itself (and the other way around)
 * 5. return the joined array
 * 6. Profit ;)
 * 
 * SECOND WAY:
 * 1. create array of the pairs, which will replace each another
 * 2. return the following: 
 *      1. split string
 *      2. array.map will replace elements according to the function you write after
 *      3. declare function without name, give it a parameter (not important what to write)
 *      4. the function shall return the value of the pairs array, which matches the parameter 
 *          (the parameter is each element from the array, where .map is attached)
 *      5. after all values went through that change process, we need to join the array to a string
 * 6. Profit ;)
 * 
 * 
 * 
 * 
 * Debug:
 * - At first i tried with an for of loop, but to write it back to the array, you need to access the array
 * 
 * 
 * 
 * 
 */