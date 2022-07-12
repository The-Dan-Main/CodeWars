
/**
 * 
 * @param {String} str 
 */
function wave(str){
    if (str.length !== 0) {
        let arr = str.split("")
        let out = []
        for (i in arr) {
            if (arr[i] !== " ") {
                arr[i] = arr[i].toUpperCase()
                out.push(arr.join(""))
                arr[i] = arr[i].toLowerCase()
            }
        }
        return out
    } else {
        return []
    }
  }



  let example = "hello"

  console.log(wave("two words"))