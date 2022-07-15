// function oddCount(n){
//     let counter = 0
//   while (n > 0) {
//     n--
//     if ((n % 2) !== 0) {
//       counter++
//     }
//   } 
//   console.log(counter)
//   return counter
//   }

//   oddCount(15023)




var wishlist = ["Red T-Shirt", "Blue Jeans", "Yellow Sweater"];
var prices = [9.99, 14.99, 12.99];
var quantity = [1, 2, 1];
var availableStock = [100, 121, 53];
var total = 0;

for (var i = 0; i <  wishlist.length; i++) {
  console.log(`${quantity[i]} ${wishlist[i]} added to your shopping cart.`);
}