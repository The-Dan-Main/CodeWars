function solution(number){
    let sumThree = []
    let sumFive = []
    let sumBoth = []

    
    while (number > 0) {
      
      if ((number % 5) === 0 && (number % 3) === 0) {
        sumBoth.push(number)
        number--
      } 
      else if ((number % 5) === 0 && (number % 3) !== 0) {
        sumFive.push(number)
        number--
      }
      else if ((number % 5) !== 0 && (number % 3) === 0) {
        sumThree.push(number)
        number--
      }
      else {number--}
      console.log("multipes of fives: ",sumFive)
      console.log("multipes of threes: ",sumThree)
      console.log("multipes of both: ",sumBoth)
      console.log("-------------------------")
    }
    sumBoth.reduce(function(a, b) { return a + b; }, 0)
    sumFive.reduce(function(a, b) { return a + b; }, 0)
    sumThree.reduce(function(a, b) { return a + b; }, 0)

    const totalSum = sumBoth + sumFive + sumThree
    console.log("Total Sum: ",totalSum)
  }
  solution(50)