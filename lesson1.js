// const x1 = 10;
// const x2 = 30;
// const number = 50;
// const res = number > x1 && number < x2;

// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}`, res)

// const res2 = number > x1 || number < x2;
// console.log(`Число ${number} попадает в отрезок от ${x1} или после ${x2}`, res2)


// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//     let totalPrice = pricePerDroid * orderedQuantity;
//   if(totalPrice > customerCredits) {
//     message = `Insufficient funds!`
    
//   } else {
//     totalPrice = customerCredits -= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left`
//   }
    
//     // Change code above this line
//     return message;
//   }
  
//   makeTransaction(3000, 5, 23000);
//   makeTransaction(1000, 3, 15000);
//   makeTransaction(5000, 10, 8000);
//   makeTransaction(2000, 8, 10000);
//   makeTransaction(500, 10, 5000);

// function getExtremeElements(array) {
//     // Change code below this line
//   const lastElementIndex = array.length -1;
//   const lastElement = array[lastElementIndex];
//   console.log(lastElement);
//   const firstElement = array[0];
//   console.log(firstElement);

  
  
//     // Change code above this line
//   }

//   getExtremeElements([1, 2, 3, 4, 5]);
//   getExtremeElements(["Earth", "Mars", "Venus"]);
//   getExtremeElements(["apple", "peach", "pear", "banana"]);

// function makeStringFromArray(array, delimiter) {
//     let string;
//     // Change code below this line
//   string = array.join(delimiter);
  
  
//     // Change code above this line
//     return string;
//   }
  
//   makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
//   makeStringFromArray(["M", "a", "n", "g", "o"], "");
//   makeStringFromArray(["top", "picks", "for", "you"], "_");

// function slugify(title) {
//     // Change code below this line
//   const slug = title.toLowerCase().split(' ').join('-');
//   console.log(slug);
//   return slug;
//     // Change code above this line
//   }
  
//   slugify("Arrays for begginers");
//   slugify("English for developer");
//   slugify("Ten secrets of JavaScript");
//   slugify("How to become a JUNIOR developer in TWO WEEKS");
// let num = 0;
//    let costnumber = 0; 

// function calculateTotal(number) {
//     // Change code below this line
   
//    for (let i = 0; i <= number; i += 1) {
//      //i += 1e code above this line
//      if(i <= number){
//       num += i;

//       // num = num + number;
//      }
 
   
//    console.log(num)
// //   console.log(totalNumber + i)
// // return totalNumber + i;
//   //  if(num <= number){
//   //   num = number;
//   //   console.log(num)
//   //  }
//   //  console.log(num);
//    }
// }
   
//    calculateTotal(1);
//    calculateTotal(3);
//    calculateTotal(7);
//    calculateTotal(18);
//    calculateTotal(24);
//    calculateTotal();