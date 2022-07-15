function countSheeps(arrayOfSheep) {
    let counter = 0
    for (let sheep of arrayOfSheep) {
      if (sheep === true) {
        counter++
      }
    } return counter
  }