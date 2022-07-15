
/**
 * 
 * @param {string} s 
 */
function accum(s) {
    let arr = s.split("");
    let out = []
    for (let i = 0; i < arr.length; i++) {
        out.push(arr[i].toUpperCase())
        if (i + 1 > 1) {
            let counter = i
            while (i + 1 <= arr.length && counter > 0) {
                out.push(arr[i])
                counter--
            }
        }
        if (i + 1 < arr.length) {
            out.push("-")
        }
    } return out.join("")
}



let example = "jbsefb";

console.log(accum(example))