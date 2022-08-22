

/**
 * 
 * @param {array} friends 
 */
// function friend(friends){
//     let output = []
//     friends.forEach(function (person) {
//         if (person.length === 4) {
//             output.push(person)
//         }
//     })
//     return output
//   }


  /**
 * 
 * @param {array} friends 
 */
function friend(friends){
   return friend.filter(p => p.length === 4)
  }






  console.log(friend(["Ryan", "Kieran", "Mark"]))
  console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))
  console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))
