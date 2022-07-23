

/**
 * 
 * @param {array} walk 
 */
function isValidWalk(walk) {
    let x = 0;
    let y = 0;
    if (walk.length == 10) {
        for (let dir of walk) {
            if (dir === "n") x++; 
            if (dir === "s") x--;
            if (dir === "e") y++;
            if (dir === "w") y--;
        }
        return x === 0 && y === 0
    } return false
}


/** 
 * way of solving:
 * as each direction is basically a increase or decrease of the X or Y Axis, we can check if the sum of all directions is zero.
 * if you walk two steps to the left and two steps to the right, you are back where you started.
 * therefore North and East is represented by -1 // south and west are represented by +1 and the sum of all should be zero to get back
 * to the point where you started. If there are no steps done, you have not moved and if you go further than 10 steps, you are not back in time!
 * 
 * 
 * 1. declare both axis as variables  
 * 2. check if sum of directions is 10, as we have to go exactly for a ten minutes walk
 * 3. go through array and increase/decrease axis by one
 * 4. return the sum of both axis (as they should be both zero)
 * 5. else return false 
 * 
 * 
 * 
 */






console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']))
